import React from "react";
import Navbar from "../../components/Navbar/";
import Question from "../../components/Question/Question";
import { addUser } from "../../actions/index";
import { connect } from "react-redux";
import "./form.css";

const mapDispatchToProps = dispatch => {
  return {
    addUser: user => dispatch(addUser(user))
  };
};

const mapStateToProps = state => {
  console.log(state);
  return { user: state[0] };
};

class ConnectedQuestionPage extends React.Component {
  state = {
    subjectName: "",
    unitName: "",
    description: "",
    bg: "",
    UserId: this.props.user.id
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  // setTopic= (subject) =>{
  //  this.setState({showQuestion: true});
  // }

  // saveQuestion = (question) => {
  //     let questions = this.state.questions.slice("");
  //     questions.push(question);
  //     this.setState({questions:questions});
  // }

  saveTopic = e => {
    e.preventDefault();
    var data = {
      subjectName: this.state.subjectName,
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
        <button onClick={this.handleAddQuestion}>+</button>
      </div>
    );
  }
  render() {
    return (
      <div>
        <Navbar firstName={this.props.user.firstName} />
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <h2 className="formh2">basic information</h2>

          <select
            className="form-control"
            name="subjectName"
            id="subject"
            onChange={this.handleChange}
          >
            <option selected="selected">select a subject</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Math">Math</option>
            <option value="English">English</option>
            <option value="Python">Python</option>
            <option value="Biology">Biology</option>
          </select>
          <input
            className="form-input"
            type="text"
            id="name"
            name="unitName"
            onChange={this.handleChange}
            placeholder="name"
          />
          <input
            className="form-input larger"
            type="text"
            id="description"
            name="description"
            onChange={this.handleChange}
            placeholder="description"
          />
          <input
            className="form-input"
            type="text"
            id="setbg"
            name="bg"
            onChange={this.handleChange}
            placeholder="background image url"
          />
          <button
            id="saveDeck"
            className="white-button"
            onClick={this.saveTopic}
          >
            Create Deck
          </button>
        </div>
      </div>
    );
  }
}

const QuestionPage = connect(mapStateToProps, mapDispatchToProps)(
  ConnectedQuestionPage
);

export default QuestionPage;

// render() {
//     return (
//         <div className="fitpage">
//           <Navbar firstName={localStorage.getItem('user')}/>

//             <div className="container text-center">
//               <div className="row qform">
//                 <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
//                   <h1 className="qh1">create a new set of flashcards!</h1>
//                 </div>

//                 <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
//                   <h2 className="qh2">basic information</h2>
//                 </div>

//                 <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
//                   <input className="addnew" type="text" id="setsubject" name="unitName" onChange={this.handleChange} placeholder="subject"/>
//                   <input className="addnew largetext" type="text" id="description" name="description" onChange={this.handleChange} placeholder="description"/>
//                   <input className="addnew" type="text" id="setbg" name="bg" onChange={this.handleChange} placeholder="background image url"/>
//                 </div>

//                 <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
//                   <h2 className="qh2">question one</h2>
//                 </div>

//                 <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
//                   <h3 className="qh3">what is the question?</h3>
//                   <input className="addnew" type="text" id="q1text"/>
//                   <h3 className="qh3">what are the possible answers?</h3>
//                   <input className="addnew" type="text" id="q1a1" placeholder="1"/>
//                   <input className="addnew" type="text" id="q1a2" placeholder="2"/>
//                   <input className="addnew" type="text" id="q1a3" placeholder="3"/>
//                   <h3 className="qh3">which answer is correct?</h3>
//                   <input className="addnew" type="text" id="correct1" placeholder="enter 1, 2, or 3"/>
//                 </div>

//                 <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
//                   <h2 className="qh2">question two</h2>
//                 </div>

//                 <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
//                   <h3 className="qh3">what is the question?</h3>
//                   <input className="addnew" type="text" id="q2text"/>
//                   <h3 className="qh3">what are the possible answers?</h3>
//                   <input className="addnew" type="text" id="q2a1" placeholder="1"/>
//                   <input className="addnew" type="text" id="q2a2" placeholder="2"/>
//                   <input className="addnew" type="text" id="q2a3" placeholder="3"/>
//                   <h3 className="qh3">which answer is correct?</h3>
//                   <input className="addnew" type="text" id="correct2" placeholder="enter 1, 2, or 3"/>
//                 </div>

//                 <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
//                   <h2 className="qh2">question three</h2>
//                 </div>

//                 <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
//                   <h3 className="qh3">what is the question?</h3>
//                   <input className="addnew" type="text" id="q3text"/>
//                   <h3 className="qh3">what are the possible answers?</h3>
//                   <input className="addnew" type="text" id="q3a1" placeholder="1"/>
//                   <input className="addnew" type="text" id="q3a2" placeholder="2"/>
//                   <input className="addnew" type="text" id="q3a3" placeholder="3"/>
//                   <h3 className="qh3">which answer is correct?</h3>
//                   <input className="addnew" type="text" id="correct3" placeholder="enter 1, 2, or 3"/>
//                 </div>

//                 <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
//                   <h2 className="qh2">question four</h2>
//                 </div>

//                 <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
//                   <h3 className="qh3">what is the question?</h3>
//                   <input className="addnew" type="text" id="q4text"/>
//                   <h3 className="qh3">what are the possible answers?</h3>
//                   <input className="addnew" type="text" id="q4a1" placeholder="1"/>
//                   <input className="addnew" type="text" id="q4a2" placeholder="2"/>
//                   <input className="addnew" type="text" id="q4a3" placeholder="3"/>
//                   <h3 className="qh3">which answer is correct?</h3>
//                   <input className="addnew" type="text" id="correct4" placeholder="enter 1, 2, or 3"/>
//                 </div>

//                 <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
//                   <h2 className="qh2">question five</h2>
//                 </div>

//                 <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
//                   <h3 className="qh3">what is the question?</h3>
//                   <input className="addnew" type="text" id="q5text"/>
//                   <h3 className="qh3">what are the possible answers?</h3>
//                   <input className="addnew" type="text" id="q5a1" placeholder="1"/>
//                   <input className="addnew" type="text" id="q5a2" placeholder="2"/>
//                   <input className="addnew" type="text" id="q5a3" placeholder="3"/>
//                   <h3 className="qh3">which answer is correct?</h3>
//                   <input className="addnew" type="text" id="correct5" placeholder="enter 1, 2, or 3"/>
//                 </div>

//                 <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
//                   <button className="white-button send oversized" id="submit" onClick={this.handleButton}>create my flashcard set!</button>
//                 </div>
//               </div>
//             </div>
//         </div>
//     )
// }
