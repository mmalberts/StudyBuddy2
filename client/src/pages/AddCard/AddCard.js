import React from 'react';
import Navbar from '../../components/Navbar/';
import {addUser} from '../../actions/index';
import "./form.css";

const mapDispatchToProps = dispatch => {
	return {
		addUser: user => dispatch(addUser(user))
	};
};

const mapStateToProps = state => {
	console.log(state);
	return {user: state[0]};
};

class 