import React from "react";
import {Link} from 'react-router-dom';
import Modal from "react-modal";
import "./SignupModal.css";

const SignupModal = props => {
  return (
    <Modal
      isOpen={props.confirmSignup}
      contentLabel="Confirm Signup"
      onRequestClose={props.handleClearModal}
      className="modalpanel"
      ariaHideApp={false}
    >
      {props.confirmSignup ? (
        <div className="modalbox">
          <h1>Thank you for signing up!</h1>
          <Link to="/"><button onClick={props.handleClearModal} className="gradient-button modalbutton">get started!</button></Link>
        </div>
      ) : (
        <div className="modalbox">
          <h1>Sorry, user aleady exists!</h1>
          <button onClick={props.handleClearModal} className="gradient-button modalbutton">Oh no!</button>
        </div>
      )}
    </Modal>
  );
};

export default SignupModal;
