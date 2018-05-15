import React from "react";
import { Link } from "react-router-dom";

const EndOfQuiz = props => {
  return (
    <div>
      <h1>Congrats! This is the end of the quiz.</h1>
      <h3>Your Score: {props.score}</h3>
      <Link to="/dashboard">Back to the dashboard </Link>
    </div>
  );
};

export default EndOfQuiz;
