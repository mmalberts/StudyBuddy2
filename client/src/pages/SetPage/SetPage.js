import React from "react";
import Navbar from "../../components/Navbar";
import About from "../About";
import {connect} from "react-redux";

const mapStateToProps = state => {
	return {user: state[0]};
} 

class ConnectedSetPage extends React.Component{

    render() {
        return (
            <div className="background example-page">
	            <Navbar firstName = {this.props.user.firstName}/>
                <About />
            </div>
        )
    }
};

const SetPage = connect(mapStateToProps)(ConnectedSetPage);

export default SetPage;

