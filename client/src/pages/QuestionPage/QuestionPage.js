import React from "react";
import { connect } from "react-redux";
import Navbar from "../../components/Navbar";
import "./QuestionPage.css";

const mapStateToProps = state => {
  return { user: state[0] };
};

class QuestionPage extends React.Component {
  state = {
    title: "Vocabulary",
    user: this.props.user.firstName + " " + this.props.user.lastName,
    chosenAns: "",
    ansStatus: undefined,
    userQuestions: [],
    counter: 0,
    progress: 65 // replace with equation: index of current question / total number of questions
  };

  componentDidMount() {
    var data = {
      UserId: this.props.match.params.unitId
    };
    fetch("/api/cards/" + this.props.match.params.unitId, {
      method: "POST",
      body: data
    })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(responseJson => {
        console.log("responseJson: ", responseJson);
        this.setState(() => ({
          userQuestions: responseJson
        }));
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  }

  handleAnsClick = e => {
    var ans = e.target.value;
    this.setState(() => ({
      chosenAns: ans
    }));
    if (this.state.chosenAns === this.state.correctAns) {
      this.setState(() => ({
        ansStatus: true
      }));
    } else {
      this.setState(() => ({
        ansStatus: false
      }));
    }
    console.log("correctAns: ", this.state.correctAns);
    console.log("chosenAns: ", this.state.chosenAns);
    console.log("ansStatus: ", this.state.ansStatus);
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
        </div>

        <div className="container text-center">
          <div className="row content">
            {this.state.userQuestions.map((ques, index) => (
              <div>
                <h1 className="question">
                  {ques.question} index: {index}
                </h1>
                <button
                  key={ques.answer1}
                  className="outline-button answer"
                  onClick={this.handleAnsClick}
                  value={ques.answer1}
                >
                  {ques.answer1}
                </button>

                <button
                  key={ques.answer2}
                  className="outline-button answer"
                  onClick={this.handleAnsClick}
                  value={ques.answer2}
                >
                  {ques.answer2}
                </button>

                <button
                  key={ques.answer3}
                  className="outline-button answer"
                  onClick={this.handleAnsClick}
                  value={ques.answer3}
                >
                  {ques.answer3}
                </button>
              </div>
            ))}
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
