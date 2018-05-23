import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Flashcard from './flashcard';
import AddFlashCard from './AddFlashCard';

const Flashcards = (props) => {

    /*handleAddFlashcard = (flashcard) => {
        this.setState((prevState) => ({
            flashcards : prevState.flashcards.concat(flashcard)
        }))
    }*/
 
    return (
        <div className="row">
            <h2 className="subheading dashboard">continue studying...</h2>
            <div className="flashcard-panel">
                <AddFlashCard 
                    /*handleAddFlashcard = {this.handleAddFlashcard}*/
                    />
                {props.flashcards.map((card) => (
                    <Flashcard 
                    key = {card.unitName}
                    id = {card.id}
                    flashcardText = {card.unitName}
                    flashcardD = {card.description}
                    flashcardBg = {card.bg}
                    handleDeleteButton = {props.handleDeleteButton}
                    cardLink = './setpage'
                    />
                ))}
            </div>
        </div>
    )
}

export default Flashcards;