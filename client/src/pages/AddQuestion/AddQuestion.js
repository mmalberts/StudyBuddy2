import React, { Component } from "react";
import CreateQuestion from "../../components/Question/CreateQuestion";
import Navbar from "../../components/Navbar/Navbar";
import "./AddQuestion.css";

export default class AddQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userQuestions: ["q 1", "q 2", "q 3"]
        };
    };

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

                <div className="container">
                    <div className="qholder">
                        {this.state.userQuestions && (
                            <ul>
                                {this.state.userQuestions.map(q => 
                                    <li>{q}</li>
                                )}
                            </ul>
                        )}
                    
                        <CreateQuestion unitId={this.props.match.params.unitId} />
                    </div>
                </div>
            </div>
        );
    };
};

