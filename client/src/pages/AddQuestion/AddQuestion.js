import React, { Component } from "react";
import CreateQuestion from "../../components/Question/CreateQuestion";
import Navbar from "../../components/Navbar/Navbar";

export default class AddQuestion extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar />
        <CreateQuestion unitId = {this.props.match.params.unitId}/>
      </div>
    );
  }
}
