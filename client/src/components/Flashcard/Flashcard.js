import React from 'react';
import {Link} from 'react-router-dom';
import classnames from 'classnames';

const Flashcard = (props) => {

	const cardBg = {
		backgroundImage: "url(" + props.flashcardBg + ")"
	};

  return (
    <Link to={props.cardLink}>
    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 cardbox">
      <div className={classnames("card", "card-default")} style={cardBg}>
        <button className="white-button card-title">{props.flashcardText}</button>
        <button 
         className="gradient-button delete" 
         id={props.id} 
         onClick={props.handleDeleteButton}
         >x</button>
      </div>
    </div></Link>
  );
}

export default Flashcard;
