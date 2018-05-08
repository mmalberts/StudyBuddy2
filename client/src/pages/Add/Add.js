import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import BasicInfo from "../../components/BasicInfo/BasicInfo";
import Question from "../../components/Question/Question";
import "./Add.css";

export default class QuestionPage extends React.Component {
  state = {
    unitName: "",
    description: "",
    UserId: localStorage.getItem("id"),
    bg: "",
    confirmBasicInfo: false,
    questionCount: 0
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  handleAddBasicInfo(unitName) {
    console.log("add basic info");
    this.setState(() => ({
      confirmBasicInfo: true
    }));
  }

  handleAddQuestion() {
    this.setState(prevState => ({
      questionCount: prevState + 1
    }));
  }

  handleButton = e => {
    e.preventDefault();
    var data = {
      unitName: this.state.unitName,
      description: this.state.description,
      UserId: this.state.UserId,
      bg: this.state.bg
    };
    console.log(data);
    fetch("/api/units/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(function(response) {
        console.log(response);
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .catch(function(err) {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="fitpage">
        <Navbar firstName={localStorage.getItem("user")} />
        <BasicInfo onClick={this.handleAddBasicInfo.bind(this)} />
        {this.state.confirmBasicInfo && <Question />}
        <button onClick={this.handleAddQuestion}>+</button>
      </div>
    );
  }
}
