import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "./Unit.css";

const mapStateToProps = state => {
	return { user: state[0] };
} 

class ConnectedUnit extends React.Component {
	state = {
	    title: "Vocabulary",
	    description: "A simple vocab test to quiz your knowledge.",
	    user: "Amanda Ramirez",
	    link: "./questionpage"
  	};

    render() {
        return (
            <div className="background example-page">
	            <Navbar firstName = {this.props.user.firstName}/>
                
                <div className="row">
			        <div className="about">
			          	<div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
				            <button className="gradient-button set-title">{this.state.title}</button>
				            <h3 className="byline">by {this.state.user}</h3>
			          	</div>

				        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-9">
				            <div className="description">
				              	{this.state.description}
				              	<Link to={this.state.link}><button className="gradient-button split">continue studying</button></Link>
				              	<Link to="/dashboard"><button className="gradient-button split">edit flashcards</button></Link>
				            </div>
				        </div>
				    </div>
				</div>
            </div>
        );
    };
};

const Unit = connect(mapStateToProps)(ConnectedUnit);

export default Unit;