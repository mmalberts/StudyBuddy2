import React from "react";
import { Link } from "react-router-dom";
import "./EndOfQuiz.css";

const EndOfQuiz = props => {
  	return (
    	<div className="container-fluid">
	      	<h1>Congrats!</h1> 
	      	<h2>This is the end of the quiz.</h2>
	      	<h3>YOUR SCORE: {props.score}</h3>
      		<Link to="/dashboard"><button className="white-button oversized continue">continue studying</button></Link>
    	</div>
  	);
};

export default EndOfQuiz;