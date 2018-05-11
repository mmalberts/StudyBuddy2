import React, { Component } from "react";
import CreateQuestion from "../../components/Question/CreateQuestion";
import Navbar from "../../components/Navbar/Navbar";

export default class AddQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionsArr: [
        {
          question1: "",
          answer1: "",
          answer2: "",
          answer3: "",
          correctAnswer: ""
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <Navbar />
        <CreateQuestion />
      </div>
    );
  }
}
