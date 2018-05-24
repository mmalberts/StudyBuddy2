import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, withRouter} from 'react-router-dom';

class UserLogin extends React.Component{

  state = {
    signup: false,
    login: true,
    userFirstName: '',
    userLastName: '',
    userEmail:'',
    password:'',
    confirmPassword:''
  };

  componentDidMount(){
    localStorage.setItem('user', '');
    localStorage.setItem('id', 0);
  }

 

  renderSwitch = (word) => {
    var signup, login;

    if (word == "login") {
      signup = false;
      login = true;
    } else {
      login = false; 
      signup = true;
    }
    
    return this.setState({login: login, signup: signup})
  }

  render() {
    var self = this;
    return (
      <div className="row">
        <div className="col-0 col-sm-0 col-md-2 col-lg-2 col-xl-4"></div>

        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-4 loginpanel">
            <div className="gradient" id="loginbox">
              <div className="row">
                <div id="buttons">
                  <button id="loginButton" onClick={self.renderSwitch.bind(null,"login")} className={self.state.login ? "main" : "sideline"}>login</button>
                  <button id="signupButton" onClick={self.renderSwitch.bind(null,"signup")} className={self.state.signup ? "main" : "sideline"}>sign up</button>
                </div>
              </div>
              {self.state.signup ? <Signup/> : null}
              {self.state.login ? <Login /> : null}
            </div>
          </div>

        <div className="col-0 col-sm-0 col-md-2 col-lg-2 col-xl-4"></div>  
      </div>
    );
  }
}

class Signup extends React.Component {
  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSignUp = (e) =>{
    e.preventDefault();
    var data = {
      firstName: this.state.userFirstName,
      lastName: this.state.userLastName,
      email: this.state.userEmail,
      password:this.state.password,
      confirmPassword: this.state.confirmPassword
    }
    console.log(data);
    fetch("/api/users", {
      method: 'POST',
      headers: {'Accept': 'application/json',
      'Content-Type': 'application/json'},
      body: JSON.stringify(data)
  }).then(function(response) {
    console.log(response);
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
  }).catch(function(err) {
      console.log(err)
  });
  }
  render() {
    return (
      <div className="row text-center">     
        <div id="signup" >
          <input type="text" id="first" placeholder="first name" name="userFirstName" onChange={this.handleChange}/>
          <input type="text" id="last" placeholder="last name" name="userLastName" onChange={this.handleChange}/>
          <input type="email" id="email" placeholder="email" name="userEmail" onChange={this.handleChange}/>
          <input type="password" id="password" placeholder="password" name="password" onChange={this.handleChange}/>
          <input type="password" id="confirm" placeholder="confirm password" name="confirmPassword" onChange={this.handleChange} />
          <button id="signup-send" className="send" onClick={this.handleSignUp}>sign me up!</button>
        </div>
      </div>
    );
  }
}
  
class Login extends React.Component {
 state={
   email: '',
   password: ''
 }

 handleChange = (e) => {
  e.preventDefault();
  this.setState({ [e.target.name]: e.target.value });
}

 handleLogin = (e) => {
  // e.preventDefault();
  var data = {
    email: this.state.email,
    password:this.state.password
  };

  fetch("/api/users/login", {
    method: 'POST',
    headers: {'Accept': 'application/json',
    'Content-Type': 'application/json'},
    body: JSON.stringify(data)

}).then(function(response) {

  console.log("response: " , response)
    if (response.status >= 400) {
      throw new Error("Bad response from server");
    }
    var data = JSON.stringify(response);
    console.log(data);
    return response.json();

}).then(function(data){


  localStorage.setItem('id', data.id);
  localStorage.setItem('user', data.firstName);


}).catch(function(err) {
    console.log(err)
});
}

  render() {
    return (
      <div className="row text-center">           
        <div id="login">
          <input type="email" id="email" placeholder="email" name="email" onChange={this.handleChange}/>
          <input type="password" id="password" placeholder="password" name="password" onChange={this.handleChange}/>
         <Link to='/dashboard'><button id="login-send" className="send" onClick={this.handleLogin}>log me in!</button></Link>
      </div> 
    </div>
    );
  }
}

export default UserLogin;