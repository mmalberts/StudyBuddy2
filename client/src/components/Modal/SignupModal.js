import React from "react";
import Modal from "react-modal";
import "./SignupModal.css";

const SignupModal = props => {
  return (
    <Modal
      isOpen={props.confirmSignup}
      contentLabel="Confirm Signup"
      onRequestClose={props.handleClearModal}
    >
      {props.confirmSignup ? (
        <div>
          <h1>"Thank you for signing up!"</h1>
          <button onClick={props.handleClearModal}>Awesome!</button>
        </div>
      ) : (
        <div>
          <h1>"Sorry, user aleady exists."</h1>
          <button onClick={props.handleClearModal}>Oh no!</button>
        </div>
      )}
    </Modal>
  );
};

export default SignupModal;
