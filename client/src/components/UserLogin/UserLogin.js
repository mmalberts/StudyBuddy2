import React from "react";
import Login from "./Login";
import SignupModal from "../../components/Modal/SignupModal";
import "./UserLogin.css";

class UserLogin extends React.Component {
    state = {
        signup: false,
        login: true,
        userFirstName: "",
        userLastName: "",
        userEmail: "",
        password: "",
        confirmPassword: ""
    };

    renderSwitch = word => {
        var signup, login;

        if (word === "login") {
            signup = false;
            login = true;
        } else {
            login = false;
            signup = true;
        }

        return this.setState({ login: login, signup: signup });
    };

    render() {
        return (
            <div className="row">
                <div className="col-0 col-sm-0 col-md-2 col-lg-2 col-xl-4" />

                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-4 loginpanel">
                    <div className="gradient" id="loginbox">
                        <div className="row">
                            <div id="buttons">
                                <button id="loginButton" onClick={this.renderSwitch("login")} className={this.state.login ? "main" : "sideline"}>login</button>
                                <button id="signupButton" onClick={this.renderSwitch("signup")} className={this.state.signup ? "main" : "sideline"}>sign up</button>
                            </div>
                        </div>
                        {this.state.signup ? <Signup /> : null}
                        {this.state.login ? <Login /> : null}
                    </div>
                </div>

                <div className="col-0 col-sm-0 col-md-2 col-lg-2 col-xl-4" />
            </div>
        );
    };
};

class Signup extends React.Component {
    state = {
        confirmSignup: undefined //used for modal
    };

    handleChange = e => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    };

    handleClearModal = () => {
        this.setState({ confirmSignup: undefined });
        window.location.reload();
    };

    handleSignUp = e => {
        e.preventDefault();

        var data = {
            firstName: this.state.userFirstName,
            lastName: this.state.userLastName,
            email: this.state.userEmail,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword
        };

        this.setState({ confirmSignup: true });

        fetch("/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
        }).then(response => {
            if (response.status >= 400) {
                this.setState({ confirmSignup: false });
                throw new Error("Bad response from server.");
            }
            return response.json();
        }).catch(err => {
            console.log("Error: " + err);
        });
    };

    render() {
        return (
            <div className="row text-center">
                <div id="signup">
                    <input
                        type="text"
                        id="first"
                        placeholder="first name"
                        name="userFirstName"
                        onChange={this.handleChange}
                    />

                    <input
                        type="text"
                        id="last"
                        placeholder="last name"
                        name="userLastName"
                        onChange={this.handleChange}
                    />

                    <input
                        type="email"
                        id="email"
                        placeholder="email"
                        name="userEmail"
                        onChange={this.handleChange}
                    />

                    <input
                        type="password"
                        id="password"
                        placeholder="password"
                        name="password"
                        onChange={this.handleChange}
                    />

                    <input
                        type="password"
                        id="confirm"
                        placeholder="confirm password"
                        name="confirmPassword"
                        onChange={this.handleChange}
                    />

                    <button id="signup-send" className="send" onClick={this.handleSignUp}>sign me up!</button>

                    <SignupModal
                        confirmSignup={this.state.confirmSignup}
                        handleClearModal={this.handleClearModal}
                    />
                </div>
            </div>
        );
    };
};

export default UserLogin;