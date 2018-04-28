import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import "./Add.css";

export default class QuestionPage extends React.Component {

    state = {
      unitName: '',
      description: '',
      UserId: localStorage.getItem('id'),
      bg: ''
    }

    handleChange = (e) => {
      e.preventDefault();
      this.setState({ [e.target.name]: e.target.value });
    }

    handleButton = (e) =>{
      e.preventDefault();
      var data = {
        unitName: this.state.unitName,
        description: this.state.description,
        UserId: this.state.UserId,
        bg: this.state.bg
      }  
      console.log(data);
      fetch("/api/units/create", {
        method: 'POST',
        headers: {'Accept': 'application/json',
        'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }).then(function(response) {
      console.log(response);
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
    }).catch(function(err) {
        console.log(err)
    });
  }
    
    render() {
        return (
            <div className="fitpage">
              <Navbar firstName={localStorage.getItem('user')}/>

                <div className="container text-center">
                  <div className="row qform">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                      <h1 className="qh1">create a new set of flashcards!</h1>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                      <h2 className="qh2">basic information</h2>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                      <input className="addnew" type="text" id="setsubject" name="unitName" onChange={this.handleChange} placeholder="subject"/>
                      <input className="addnew largetext" type="text" id="description" name="description" onChange={this.handleChange} placeholder="description"/>
                      <input className="addnew" type="text" id="setbg" name="bg" onChange={this.handleChange} placeholder="background image url"/>
                    </div>
                      
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                      <h2 className="qh2">question one</h2>
                    </div>
                      
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                      <h3 className="qh3">what is the question?</h3>
                      <input className="addnew" type="text" id="q1text"/>
                      <h3 className="qh3">what are the possible answers?</h3>
                      <input className="addnew" type="text" id="q1a1" placeholder="1"/>
                      <input className="addnew" type="text" id="q1a2" placeholder="2"/>
                      <input className="addnew" type="text" id="q1a3" placeholder="3"/>
                      <h3 className="qh3">which answer is correct?</h3>
                      <input className="addnew" type="text" id="correct1" placeholder="enter 1, 2, or 3"/>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                      <h2 className="qh2">question two</h2>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                      <h3 className="qh3">what is the question?</h3>
                      <input className="addnew" type="text" id="q2text"/>
                      <h3 className="qh3">what are the possible answers?</h3>
                      <input className="addnew" type="text" id="q2a1" placeholder="1"/>
                      <input className="addnew" type="text" id="q2a2" placeholder="2"/>
                      <input className="addnew" type="text" id="q2a3" placeholder="3"/>
                      <h3 className="qh3">which answer is correct?</h3>
                      <input className="addnew" type="text" id="correct2" placeholder="enter 1, 2, or 3"/>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                      <h2 className="qh2">question three</h2>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                      <h3 className="qh3">what is the question?</h3>
                      <input className="addnew" type="text" id="q3text"/>
                      <h3 className="qh3">what are the possible answers?</h3>
                      <input className="addnew" type="text" id="q3a1" placeholder="1"/>
                      <input className="addnew" type="text" id="q3a2" placeholder="2"/>
                      <input className="addnew" type="text" id="q3a3" placeholder="3"/>
                      <h3 className="qh3">which answer is correct?</h3>
                      <input className="addnew" type="text" id="correct3" placeholder="enter 1, 2, or 3"/>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                      <h2 className="qh2">question four</h2>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                      <h3 className="qh3">what is the question?</h3>
                      <input className="addnew" type="text" id="q4text"/>
                      <h3 className="qh3">what are the possible answers?</h3>
                      <input className="addnew" type="text" id="q4a1" placeholder="1"/>
                      <input className="addnew" type="text" id="q4a2" placeholder="2"/>
                      <input className="addnew" type="text" id="q4a3" placeholder="3"/>
                      <h3 className="qh3">which answer is correct?</h3>
                      <input className="addnew" type="text" id="correct4" placeholder="enter 1, 2, or 3"/>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                      <h2 className="qh2">question five</h2>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                      <h3 className="qh3">what is the question?</h3>
                      <input className="addnew" type="text" id="q5text"/>
                      <h3 className="qh3">what are the possible answers?</h3>
                      <input className="addnew" type="text" id="q5a1" placeholder="1"/>
                      <input className="addnew" type="text" id="q5a2" placeholder="2"/>
                      <input className="addnew" type="text" id="q5a3" placeholder="3"/>
                      <h3 className="qh3">which answer is correct?</h3>
                      <input className="addnew" type="text" id="correct5" placeholder="enter 1, 2, or 3"/>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                      <button className="white-button send oversized" id="submit" onClick={this.handleButton}>create my flashcard set!</button>
                    </div>
                  </div>
                </div>
            </div>
        )
    }
};