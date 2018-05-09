import React from 'react';
import {Link} from 'react-router-dom';
import classnames from 'classnames';

const Flashcard = (props) => {

	const cardBg = {
		//backgroundImage: "url(http://i0.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg)"
		backgroundImage: "url(" + props.flashcardBg + ")"
	};

  return (
    <Link to={props.cardLink}>
    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 cardbox">
      <div className={classnames("card", "card-default", props.flashcardBg)} style={cardBg}>
        <button className="white-button card-title">{props.flashcardText}</button>
        <button 
         className="gradient-button delete" 
         id="delete" 
         onClick={(e) => {
           props.handleDeleteButton(props.flashcardText)
           }}
         >x</button>
      </div>
    </div></Link>
  );
}

export default Flashcard;