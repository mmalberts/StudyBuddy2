import React from 'react';
import Flashcard from '../../components/Flashcard';
import AddFlashCard from '../AddFlashCard';
import "./flashcards.css";

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

                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 cardbox">
                  <div className="math card card-default">
                    <button className="white-button card-title">math</button>
                  </div>
                </div>

                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 cardbox">
                  <div className="science card card-default">
                    <button className="white-button card-title">science</button>
                  </div>
                </div>

                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 cardbox">
                  <div className="english card card-default">
                    <button className="white-button card-title">english</button>
                  </div>
                </div>

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