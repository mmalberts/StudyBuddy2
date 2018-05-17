import React from "react";
import SignupModal from "../../components/SignupModal";
import { addUser } from "../../actions/index";
import { connect } from "react-redux";
import { Redirect } from "react-router";

const mapDispatchToProps = dispatch => {
    return { addUser: user => dispatch(addUser(user)) };
};

class ConnectedLogin extends React.Component {
    state = {
       email: "",
       password: "",
       id: "",
       firstName: "",
       signedIn: false, 
       wrongLogIn: undefined, 
       openModal: false
    };

    handleClearModal = () => {
        this.setState({ wrongLogIn: undefined, openModal: false });
        window.location.reload();
    };

    handleChange = e => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    };

    handleLogin = e => {
        var data = {
            email: this.state.email,
            password: this.state.password,
        };

        fetch("/api/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
        }).then(response => {
            if (response.status >= 400) {
                throw new Error("Bad response from server.");
            }
            return response.json();
        }).then(data => { 
            if (data.firstName !== undefined) {
                this.props.addUser({
                    firstName: data.firstName, 
                    lastName: data.lastName,
                    id: data.id
                });
                this.setState({ signedIn: true });
            } else {
                this.setState({wrongLogIn:false, openModal: true});
            }
        }).catch(err => {
            console.log("Error: " + err);
        });
    }

  render() {
    return !this.state.signedIn ? (
        <div className="row text-center">           
            <div id="login">
                <input type="email" id="email" placeholder="email" name="email" onChange={this.handleChange}/>
                <input type="password" id="password" placeholder="password" name="password" onChange={this.handleChange}/>
                <button id="login-send" className="send" onClick={this.handleLogin}>log me in!</button>
            </div>

            <SignupModal
                confirmSignup={this.state.wrongLogIn}
                handleClearModal={this.handleClearModal}
                openModal={this.state.openModal}
            />
        </div> ) : <Redirect push to={{pathname:"/dashboard"}}/>
    };
};

const Login = connect(null, mapDispatchToProps)(ConnectedLogin);

export default Login;