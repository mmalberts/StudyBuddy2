import React from "react";
import Navbar from "../../components/Navbar";
import "./questions.css";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { user: state[0] };
};

class QuestionPage extends React.Component {
  state = {
    title: "Vocabulary",
    user: this.props.user.firstName + " " + this.props.user.lastName,
    question: "Wow, isn't this a great question?",
    answerArr: [
      "ok",
      "e = mc^2",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin felis nisl, consequat eu aliquet vitae, pulvinar sed orci."
    ],
    correctAns: "ok",
    chosenAns: "",
    ansStatus: undefined
  };

  handleAnsClick = e => {
    var ans = e.target.value;
    this.setState(() => ({
      chosenAns: ans
    }));
    // console.log("chosenAns: ", this.state.chosenAns);
    if (
      this.state.ansStatus &&
      this.state.chosenAns === this.state.correctAns
    ) {
      this.setState(() => ({
        ansStatus: true
      }));
    } else {
      this.setState(() => ({
        ansStatus: false
      }));
      console.log("ansStatus if: ", this.state.ansStatus);
    }

    this.state.ansStatus ? <h1>state is set</h1> : <h1> state is not set </h1>;
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
            <h1 className="question">{this.state.question}</h1>
            {this.state.answerArr.map(answer => (
              <button
                key={answer}
                className="outline-button answer"
                onClick={this.handleAnsClick}
                value={answer}
              >
                {answer}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(QuestionPage);
