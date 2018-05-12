import React, { Component } from "react";
import CreateQuestion from "../../components/Question/CreateQuestion";
import Navbar from "../../components/Navbar/Navbar";
import "./AddQuestion.css";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { user: state[0] };
};

class AddQuestion extends Component {

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
                <Navbar firstName = {this.props.user.firstName}/>

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



export default connect(mapStateToProps)(AddQuestion);