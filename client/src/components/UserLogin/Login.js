import React from 'react';
//import ReactDOM from 'react-dom';
//import Dashboard from '../../pages/Dashboard';
//import {BrowserRouter, Route, Switch, Link, withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import { Redirect } from 'react-router';
import {addUser} from '../../actions/index'

const mapDispatchToProps = dispatch => {
    return {
        addUser: user => dispatch(addUser(user))
    };
};

class ConnectedLogin extends React.Component {
 state={
   email: '',
   password: '',
   id: '',
   firstName: '',
   signedIn: false
 }

 handleChange = (e) => {
  e.preventDefault();
  this.setState({ [e.target.name]: e.target.value });
}

 handleLogin = (e) => {
  // e.preventDefault();
  var data = {
    email: this.state.email,
    password:this.state.password,
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

}).then(data => { 

  console.log(data.id);
  console.log(data.firstName);
  //var firstName = data.firstName;
  //var id = data.id;
  // localStorage.setItem('id', data.id);
  // localStorage.setItem('user', data.firstName);
  if(data.firstName !== undefined){
    this.props.addUser({firstName: data.firstName, id: data.id});
    this.setState({
       signedIn: true
    });
  }
  else{
    alert('Wrong log-in information! Please try again!');
  }


  //this.addUser();
  
}).catch(function(err) {
    console.log(err)
});
}

// addUser = () => {
//   const {firstName, id} = this.state;
//   console.log(firstName);
  
// };

  render() {
    return !this.state.signedIn ? (
      <div className="row text-center">           
        <div id="login">
          <input type="email" id="email" placeholder="email" name="email" onChange={this.handleChange}/>
          <input type="password" id="password" placeholder="password" name="password" onChange={this.handleChange}/>
          <button id="login-send" className="send" onClick={this.handleLogin}>log me in!</button>
        </div>
      </div> ) : <Redirect push to={{pathname:"/dashboard"}}/>
  }
}

const Login = connect(null, mapDispatchToProps)(ConnectedLogin);

export default Login;