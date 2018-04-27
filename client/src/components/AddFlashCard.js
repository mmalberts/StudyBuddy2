import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

export default class AddFlashCard extends React.Component {
  /*state = {
    error: undefined
  };

  handleAddFlashcard = (e) => {
    e.preventDefault();
    const flashcard = e.target.elements.flashcard.value.trim();
    const error = this.props.handleAddFlashcard(flashcard);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.flashcard.value = '';
    }
  };*/

  render() {
    return (
      /*<div className="row text-center">
        <div id="addCardForm">
          <form onSubmit={this.handleAddFlashcard}>
            <input type="text" name="flashcard" id="cardname"/><button className="white-button" id="addCard">add new set</button>
          </form>
        </div>
      </div>*/

      /*<div className="row text-center" id="addCardForm">
        <Link to="/add"><button className="white-button" id="addCard">add new set</button></Link>
      </div>*/

      <Link to="./add"><div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 cardbox">
      <div className="card">
        <button className="white-button card-fill">create a<br/>new set of<br/> flashcards!</button>
      </div>
    </div></Link>
    );
  }
}