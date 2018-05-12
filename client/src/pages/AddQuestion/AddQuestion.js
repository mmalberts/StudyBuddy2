import React, { Component } from "react";
import CreateQuestion from "../../components/Question/CreateQuestion";
import Navbar from "../../components/Navbar/Navbar";

export default class AddQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userQuestions: ["q 1", "q 2", "q 3"]
    };
  }

  render() {
    return (
      <div>
        {/* <Navbar /> */}
        {this.state.userQuestions && (
          <ul>{this.state.userQuestions.map(q => <li>{q}</li>)}</ul>
        )}
        <CreateQuestion unitId={this.props.match.params.unitId} />
      </div>
    );
  }
}
