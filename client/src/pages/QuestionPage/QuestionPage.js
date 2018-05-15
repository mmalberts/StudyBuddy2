import React from "react";
import { connect } from "react-redux";
import EndOfQuiz from "../../components/EndOfQuiz";
import Navbar from "../../components/Navbar";
import Question from "../../components/Question";
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
      score: 0
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
        console.log("Error: " + err);
      });
  }

  resetState() {
    var count = this.state.num + 1;

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

  handleAnsClick = e => {
    let correctAnswer = e.correctAnswer;
    let ans = e.chosenAns;
    let percent =
      this.state.progress + Math.round(1 / this.state.totalQuestions * 100);

    if (this.state.currentQuestion === this.state.totalQuestions - 1) {
      percent = 100;
    }

    if (correctAnswer === ans) {
      this.setState(
        () => ({
          ansStatus: true,
          currentQuestion: this.state.currentQuestion + 1,
          progress: percent,
          score: this.state.score + 1
        }),
        this.resetState
      );
    } else {
      this.setState(
        () => ({
          ansStatus: false,
          currentQuestion: this.state.currentQuestion + 1,
          progress: percent
        }),
        this.resetState
      );
    }
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

        <div className="container text-center ml-auto mr-auto">
          <div className="row content">
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
              <EndOfQuiz score={this.state.score} />
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
