import React from "react";
import { Link } from "react-router-dom";
import Flashcard from "../../components/Flashcard";
import "./DisplayFlashcards.css";

const DisplayFlashcards = props => {
    return (
        <div className="row">
            <h2 className="subheading dashboard">continue studying...</h2>
            <div className="flashcard-panel">
                <Link to="/add">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 cardbox">
                        <div className="card">
                            <button className="white-button card-fill">create a<br/>new set of<br/> flashcards!</button>
                        </div>
                    </div>
                </Link>

                { props.flashcards.map(card => (
                    <Flashcard 
                        key = {card.unitName}
                        id = {card.id}
                        flashcardText = {card.unitName}
                        flashcardD = {card.description}
                        flashcardBg = {card.bg}
                        handleDeleteButton = {props.handleDeleteButton}
                        cardLink = {"/unit/" + card.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default DisplayFlashcards;