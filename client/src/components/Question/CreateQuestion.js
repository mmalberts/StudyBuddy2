import React from "react";
import Navbar from "../../components/Navbar/Navbar";

//TODO: 1) Store these questions in the database.
// 2) Fetch the questions from the database into the Question.js component.

export default class Questions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      question: "",
      answer1: "",
      answer2: "",
      answer3: "",
      correctAnswer: "",
      UnitId: this.props.unitId,
      gotItRight: false,
      cardId: 1
    };
  }

  saveAndIncrement = e => {
    e.preventDefault();
    // let questions = this.props.questions.slice("");
    // questions.push(question);
    // let number = this.state.number + 1;
    // this.setState({
    //   question: "",
    //   answer1: "",
    //   answer2: "",
    //   answer3: "",
    //   correctAnswer: "",
    //   number: number,
    //   questions: questions
    // });
    let self = this;

    let data = {
      question: this.state.question,
      answer1: this.state.answer1,
      answer2: this.state.answer2,
      answer3: this.state.answer3,
      correctAnswer: this.state.correctAnswer,
      UnitId: this.state.UnitId,
      gotItRight: this.state.gotItRight,
      cardId: this.state.cardId
    };

    console.log("data: ", data);

    fetch("/api/cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(data)
    }).then(response => {
      if (response.status >= 400) {
        throw new Error("Bad response from server.");
      }
      return response.json();
    });
    let number = this.state.cardId + 1;
    this.setState({
      question: "",
      answer1: "",
      answer2: "",
      answer3: "",
      correctAnswer: "",
      cardId: number
    });
    console.log("state number: ", this.state.cardId);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });

    console.log("change: ", this.state);
  };

  render() {
    return (
      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <h2 className="qh2">question {this.state.number}</h2>

        <h3 className="qh3">what is the question?</h3>
        <input
          className="addnew"
          value={this.state.question}
          type="text"
          name="question"
          onChange={this.handleChange}
        />
        <h3 className="qh3">what are the possible answers?</h3>
        <input
          className="addnew"
          value={this.state.answer1}
          onChange={this.handleChange}
          type="text"
          name="answer1"
          placeholder="1"
        />
        <input
          className="addnew"
          value={this.state.answer2}
          onChange={this.handleChange}
          type="text"
          name="answer2"
          placeholder="2"
        />
        <input
          className="addnew"
          value={this.state.answer3}
          onChange={this.handleChange}
          type="text"
          name="answer3"
          placeholder="3"
        />
        <h3 className="qh3">which answer is correct?</h3>
        <input
          className="addnew"
          value={this.state.correctAnswer}
          type="text"
          name="correctAnswer"
          onChange={this.handleChange}
          placeholder="enter 1, 2, or 3"
        />

        <button
          className="btn"
          // onClick={() => this.saveAndIncrement(this.state)}
          onClick={this.saveAndIncrement}
        >
          Save Question{" "}
        </button>

        <button
          className="white-button send oversized"
          id="submit"
          onClick={this.props.saveQuestion}
        >
          create my flashcard set!{" "}
        </button>
      </div>
    );
  }
}
