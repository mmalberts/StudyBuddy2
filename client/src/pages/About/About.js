import React from 'react';
import {Link} from 'react-router-dom';
import "./About.css";

class About extends React.Component {
  state = {
    title: "Vocabulary",
    description: "A simple vocab test to quiz your knowledge.",
    user: "Amanda Ramirez",
    link: "./questionpage"
  }

  render() {
    return (
      <div className="row">
        <div className="about">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <button className="gradient-button set-title">{this.state.title}</button>
            <h3 className="byline">by {this.state.user}</h3>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
            <div className="description">
              {this.state.description}
              <Link to={this.state.link}><button className="gradient-button continue">continue</button></Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default About;