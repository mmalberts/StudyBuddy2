import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

const Flashcard = props => {
	const cardBg = {
		backgroundImage: "url(" + props.flashcardBg + ")"
	};

    return (
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 cardbox">
        <button className="gradient-button delete" id={props.id} onClick={props.handleDeleteButton}>x</button>
        
            <Link to={props.cardLink}>
                <div className={classnames("card", "card-default")} style={cardBg}>
                
                    <button className="white-button card-title">{props.flashcardText}</button>
                </div>
            </Link>
        </div>
    );
};

export default Flashcard;