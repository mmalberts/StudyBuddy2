import React from "react";
import {addUser} from "../../actions/index";
import {connect} from "react-redux";
import Navbar from "../../components/Navbar";
import "./DoesNotExist.css";

const mapStateToProps = state => {
    return { user: state[0] };
};

const mapDispatchToProps = dispatch => {
    return { addUser: user => dispatch(addUser(user)) };
};

class ConnectedDoesNotExist extends React.Component {
	state = {
        firstName: "lost traveller",
    };

    componentDidMount() {
        this.setState({
            firstName: this.props.user.firstName,
        });
    };

    render() {
        return (
            <div>
            	<Navbar firstName={this.state.firstName}/>
				<h1 className="error top">ERROR 404</h1>
				<h2 className="error">Page does not exist!</h2>
            </div>
        );
    };
};

const DoesNotExist = connect(mapStateToProps, mapDispatchToProps)(ConnectedDoesNotExist);  

export default DoesNotExist;