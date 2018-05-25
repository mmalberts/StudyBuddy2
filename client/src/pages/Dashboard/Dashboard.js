import React from "react";
import { addUser } from "../../actions/index";
import { connect } from "react-redux";
import DisplayFlashcards from "../../components/DisplayFlashcards";
import Navbar from "../../components/Navbar";
import "./Dashboard.css";

const mapStateToProps = state => {
    return { user: state[0] };
};

const mapDispatchToProps = dispatch => {
    return { addUser: user => dispatch(addUser(user)) };     
};

class ConnectedDashboard extends React.Component {
    state = {
        firstName: "",
        id: "",
        flashcards: [],
        filteredFlashcards: []
    };

    handleDeleteButton = e => {
        var cardQueryUrl = "/api/cards/" + e.target.id;

        fetch(cardQueryUrl, {
            method: "DELETE"
        }).then(response => response.json);
            
        var unitQueryURL = "/api/units/" + e.target.id;
        
        fetch(unitQueryURL, {
            method: "DELETE"
        }).then(response => response.json);
        
        window.location.reload();
    };

    filterOnClick = e => {
        var url, data; 

        if (e.target.id === "all") {
            url = "/api/units";
            data = {
                user_id: this.props.user.id
            };
        } else {
            url = "/api/units/filter";
            data = {
                user_id: this.props.user.id,
                subjectName: e.target.id
            };
        }

        let self = this;

        fetch(url, {
            method: "POST",
            headers : { 
                "Content-Type": "application/json",
                "Accept": "application/json"
            }, 
            body:JSON.stringify(data)
        }).then(response => {
            if (response.status >= 400) {
                throw new Error("Bad response from server.");
            }
            return response.json();
        }).then(data => {
            self.setState({
                filteredFlashcards: data
            });
        }).catch(err => {
            console.log("Error: " + err);
        });
    };

    componentDidMount() {
        this.setState({
            firstName: this.props.user.firstName,
            id: this.props.user.id
        });

        let self = this;

        var data = {
          user_id: this.props.user.id
        };

        fetch("/api/units", {
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
            self.setState({
                filteredFlashcards: data
            });
        }).catch(err => {
            console.log("Error: " + err);
        });
    }; 
    
    render() {
        return (
            <div>
	            <Navbar firstName={this.state.firstName}/>

	            <div className="container">
                    <div className="row filterholder">
                        <h2 className="subheading">filters</h2>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="row filterlist">
                                <button className="filter standard white-button" id="all" onClick={this.filterOnClick}>all</button>
                                <button className="filter standard white-button" id="Biology" onClick={this.filterOnClick}>biology</button>
                                <button className="filter standard white-button" id="English" onClick={this.filterOnClick}>english</button>
                                <button className="filter standard white-button" id="History" onClick={this.filterOnClick}>history</button>
                                <button className="filter standard white-button" id="Mathematics" onClick={this.filterOnClick}>mathematics</button>
                                <button className="filter standard white-button" id="Nutrition" onClick={this.filterOnClick}>nutrition</button>
                                <button className="filter standard white-button" id="Programming" onClick={this.filterOnClick}>programming</button>
                                <button className="filter standard white-button" id="Psychology" onClick={this.filterOnClick}>psychology</button>
                                <button className="filter standard white-button" id="Science" onClick={this.filterOnClick}>science</button>
                            </div>
                        </div>
                    </div>

		            <DisplayFlashcards 
                        flashcards = {this.state.filteredFlashcards} 
                        handleDeleteButton = {this.handleDeleteButton}
		            />
		        </div>
            </div>
        );
    };
};

const Dashboard = connect(mapStateToProps, mapDispatchToProps)(ConnectedDashboard);  

export default Dashboard;