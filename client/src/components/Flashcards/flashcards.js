import React from 'react';
import Flashcard from '../../components/Flashcard';
import AddFlashCard from '../AddFlashCard';
import "./flashcards.css";

const Flashcards = (props) => {
 
    return (
        <div className="row">
            <h2 className="subheading dashboard">continue studying...</h2>
            <div className="flashcard-panel">
                <AddFlashCard />

                { props.flashcards.map((card) => (
                    <Flashcard 
                    key = {card.unitName}
                    id = {card.id}
                    flashcardText = {card.unitName}
                    flashcardD = {card.description}
                    flashcardBg = {card.bg}
                    handleDeleteButton = {props.handleDeleteButton}
                    cardLink = './Unit'
                    />
                ))}
            </div>
        </div>
    )
}

export default Flashcards;