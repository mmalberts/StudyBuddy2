import React, { Component } from "react";
import CreateQuestion from "../../components/Question/CreateQuestion";
import Navbar from "../../components/Navbar/Navbar";

export default class AddQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userQuestions: []
    };
  }

  componentDidMount(){
        let self = this;
        var data = {
          UserId: this.props.match.params.unitId
        }
        var questionsArr = [];

        fetch("/api/cards/" + this.props.match.params.unitId, {
            method: "POST",
            body: data
        }).then(response => {
            return response.json();         
        }).then(responseJson => {
          console.log(responseJson);
          self.setState({
            userQuestions: responseJson
          })
        }).catch(err => {
            console.log("Error: ", err);
        });
  }

  render() {
    return (
      <div>
         <Navbar /> 
        {this.state.userQuestions && (
          <ul>{this.state.userQuestions.map(q => <li>{q.question}</li>)}</ul>
        )}
        <CreateQuestion unitId={this.props.match.params.unitId} />
      </div>
    );
  }
}
