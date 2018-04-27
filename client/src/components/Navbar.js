import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component {
  state={
    title: 'Study Buddy',
    showMenu: false
  }

  onClick() {
    if (this.state.showMenu === true) {
      this.setState({ showMenu: false });
    } else {
      this.setState({ showMenu: true });
    }
  }

  render() {
    return (
      <div className="navbar navbar-light">
        <h1 className="logo-dark">{this.state.title}</h1>
        <button className="white-button" id="collapse" onClick={this.onClick.bind(this)}>&equiv;</button>
        <div className="nav-right">
          <p className="welcome">welcome back, {this.props.firstName}!</p>
          <Link to ='/dashboard'><button id="study" className="gradient-button nav-button">study</button></Link>
          <Link to ='/'><button id="log out" className="gradient-button nav-button">log out</button></Link>
        </div>
        { this.state.showMenu ? <Opened /> : null }
      </div>
    );
  }
};

class Opened extends React.Component {
  render() {
    return (
      <div className="nav-opened">
        <Link to ='/dashboard'><button id="study" className="gradient-button nav-button">study</button></Link>
        <Link to ='/'><button id="log out" className="gradient-button nav-button">log out</button></Link>
      </div>
    );
  }
}

export default Navbar;