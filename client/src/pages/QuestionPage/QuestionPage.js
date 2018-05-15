import React from "react";
import { connect } from "react-redux";
import Navbar from "../../components/Navbar";
import Question from "../../components/Question/Question.js";
import "./QuestionPage.css";

const mapStateToProps = state => {
  return { user: state[0] };
};

class QuestionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      user: this.props.user.firstName + " " + this.props.user.lastName,
      ansStatus: undefined,
      userQuestions: [],
      num: 0,
      currentQ: [],
      currentQuestion: 0,
      totalQuestions: 0,
      progress: 0,
      score: ""
    };
  }

  componentDidMount() {
    var data = {
      UserId: this.props.match.params.unitId
    };
    fetch("/api/cards/" + this.props.match.params.unitId, {
      method: "POST",
      body: data
    })
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        this.setState(() => ({
          userQuestions: responseJson,
          title: responseJson[0].Unit.unitName,
          currentQ: responseJson[0],
          totalQuestions: responseJson.length
        }));
      })
      .catch(err => {
        console.log("Error: ", err);
      });
    this.calculateScore();
  }

  resetState() {
    var count = this.state.num + 1;
    console.log("count:", count);
    if (count < this.state.userQuestions.length) {
      this.setState(() => ({
        num: this.state.num + 1,
        currentQ: this.state.userQuestions[count]
      }));
    } else {
      this.setState(() => ({
        num: this.state.num + 1
      }));
    }
  }

  calculateScore = () => {
    let calcScore = 0;
    let calcProgress = this.state.currentQuestion / this.state.totalQuestions;

    for (var i = 0; i < this.state.userQuestions.length; i++) {
      if (this.state.userQuestions[i].gotItRight) {
        calcScore++;
      }
    }

    if (this.state.currentQuestion > 0 && this.state.totalQuestions > 0) {
      this.setState({ progress: calcProgress });
    } else {
      this.setState({ progress: 0 });
    }

    this.setState({
      score: calcScore,
      currentQuestion: this.state.currentQuestion++
    });
  };

  handleAnsClick = e => {
    let correctAnswer = e.correctAnswer;
    let ans = e.chosenAns;
    if (correctAnswer === ans) {
      this.setState(
        () => ({
          ansStatus: true
        }),
        this.resetState,
        this.calculateScore
      );
    } else {
      this.setState(
        () => ({
          ansStatus: false
        }),
        this.resetState,
        this.calculateScore
      );
    }
    this.calculateScore();
  };

  render() {
    return (
      <div className="fitpage">
        <Navbar firstName={this.props.user.firstName} />

        <div className="row info">
          <button className="white-button mini-title">
            {this.state.title}
          </button>
          <h3 className="mini-byline">by {this.state.user}</h3>
          <button className="white-button mini-title score">
            {this.state.score} / {this.state.totalQuestions}
          </button>
        </div>

        <div className="container text-center">
          <div className="row content">
            {/* {console.log("userQuestions: ", this.state.userQuestions)}
            {console.log("currentQ: ", this.state.currentQ)} */}
            {this.state.num < this.state.userQuestions.length ? (
              <Question
                key={this.state.currentQ.id}
                question={this.state.currentQ.question}
                answer1={this.state.currentQ.answer1}
                answer2={this.state.currentQ.answer2}
                answer3={this.state.currentQ.answer3}
                correctAnswer={this.state.currentQ.correctAnswer}
                handleAnsClick={this.handleAnsClick}
              />
            ) : (
              <h1>end of questions</h1>
            )}
          </div>
        </div>

        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: this.state.progress + "%" }}
            aria-valuenow={this.state.progress}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {this.state.progress}%
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(QuestionPage);
