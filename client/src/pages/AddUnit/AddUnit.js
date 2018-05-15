import React from "react";
import { addUser } from "../../actions/index";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "./AddUnit.css";

const mapDispatchToProps = dispatch => {
    return { addUser: user => dispatch(addUser(user)) };
};

const mapStateToProps = state => {
    return { user: state[0] };
};

class ConnectedAddUnit extends React.Component {
    state = {
        subjectName: "",
        unitName: "",
        description: "",
        bg: "",
        UserId: this.props.user.id,
        unitAddSuccess: false
    };

    handleChange = e => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    };

    saveTopic = e => {
        e.preventDefault();
        
        var data = {
            subjectName: this.state.subjectName,
            unitName: this.state.unitName,
            description: this.state.description,
            UserId: this.state.UserId,
            bg: this.state.bg
        };

        fetch("/api/units/create", {
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
            this.setState({ unitAddSuccess: true });
            return response.json();
        }).catch(err => {
            console.log("Error: " + err);
        });
    };

    render() {
        return !this.state.unitAddSuccess ? (
            <div>
                <Navbar firstName={this.props.user.firstName} />
                
                <div className="container">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <h2 className="formh2">creating a new unit...</h2>

                        <select 
                            className="form-control"
                            name="subjectName"
                            id="subject"
                            onChange={this.handleChange}
                        >
                            <option value="default">select a subject</option>
                            <option value="Biology">Biology</option>
                            <option value="English">English</option>
                            <option value="History">History</option>
                            <option value="Mathematics">Mathematics</option>
                            <option value="Nutrition">Nutrition</option>
                            <option value="Programming">Programming</option>
                            <option value="Psychology">Psychology</option>
                            <option value="Science">Science</option>
                        </select>
                        
                        <input
                            className="form-input"
                            type="text"
                            id="name"
                            name="unitName"
                            onChange={this.handleChange}
                            placeholder="name"
                        />

                        <input
                            className="form-input larger"
                            type="text"
                            id="description"
                            name="description"
                            onChange={this.handleChange}
                            placeholder="description"
                        />

                        <input
                            className="form-input"
                            type="text"
                            id="setbg"
                            name="bg"
                            onChange={this.handleChange}
                            placeholder="background image url"
                        />
                        
                        <button id="saveDeck" className="white-button oversized create" onClick={this.saveTopic}>create unit</button>
                    </div>
                </div>
            </div>
        ) : <Redirect to={{pathname:"/dashboard"}}/>
    };
};

const AddUnit = connect(mapStateToProps, mapDispatchToProps)(ConnectedAddUnit);

export default AddUnit;