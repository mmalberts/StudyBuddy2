import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Filters from "../../components/Filters";
import Flashcards from "../../components/Flashcards";
import "./dashboard.css";
import {connect} from "react-redux";
import {addUser} from '../../actions/index';


const mapStateToProps = state => {
    console.log(state);
    return {user: state[0]};
}

const mapDispatchToProps = dispatch => {
    return {
        addUser: user => dispatch(addUser(user))
    };
};

class ConnectedDashboard extends React.Component {
    state = {
        firstName: '',
        id: '',
        flashcards: [],
        filteredFlashcards: []
    }

    handleDeleteButton = (event) => {
        console.log("delete button clicked: " + event.target.id);
        var queryURL = '/api/units/' + event.target.id;
        console.log(queryURL);
        fetch(queryURL, {
            method: "delete"
        }).then(console.log("deleted"));
    }

    filterOnClick = event => {
        // let filterValue = event.target.id;
        // console.log(filterValue);

        // let filtered = [];

        // for (var i = 0; i < this.state.filteredFlashcards.length; i++) {
        //     if (this.state.filteredFlashcards[i].subjectName === filterValue) {
        //         filtered.push(this.state.flashcards[i]);
        //     }
        // }

        // this.props.addUser({ 
        //     firstName: this.props.user.firstName, 
        //     id: this.props.user.id,
        //     filteredFlashcards: filtered 
        // });
        var url, data; 
        console.log(event.target.id);

        if(event.target.id === 'all'){
            url = '/api/units'
            data = {
                user_id: this.props.user.id
            };
        }
        else{
            url = '/api/units/filter';
            data = {
                user_id: this.props.user.id,
                subjectName: event.target.id
            };
        }

        let self = this;
        fetch(url, {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }, 
            method: 'POST',
            body:JSON.stringify(data)

        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            console.log(response);
            var data = JSON.stringify(response);
            console.log(data);
            return response.json();
        }).then(function(data) {
            console.log(data);
            self.setState({
                //flashcards: data,
                filteredFlashcards: data
            })


        }).catch(err => {
            console.log('caught it!', err);
        })
    }

    componentDidMount() {

        this.setState({
            firstName: this.props.user.firstName,
            id: this.props.user.id
        });

        let self = this;

        var data = {
            user_id: this.props.user.id
        }

        fetch('/api/units', {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }, 
            method: 'POST',
            body:JSON.stringify(data)

        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            console.log(response);
            var data = JSON.stringify(response);
            console.log(data);
            return response.json();
        }).then(function(data) {
            console.log(data);
            self.setState({
                //flashcards: data,
                filteredFlashcards: data
            })


        }).catch(err => {
            console.log('caught it!', err);
        })

        // this.props.addUser({
        //     firstName: this.state.firstName, 
        //     id: this.state.id, 
        //     filteredFlashcards: this.state.filteredFlashcards
        // });
    } 
    
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
                                <button className="filter standard white-button" id="Math" onClick={this.filterOnClick}>math</button>
                                <button className="filter standard white-button" id="Science" onClick={this.filterOnClick}>science</button>
                                <button className="filter standard white-button" id="English" onClick={this.filterOnClick}>english</button>
                                <button className="filter standard white-button" id="History" onClick={this.filterOnClick}>history</button>
                                <button className="filter standard white-button" id="Computer Science" onClick={this.filterOnClick}>computer science</button>
                            </div>
                        </div>
                    </div>

		            <Flashcards 
                     flashcards = {this.state.filteredFlashcards} 
                     handleDeleteButton = {this.handleDeleteButton}
		            />
		        </div>
            </div>
        );
    }
};

const Dashboard = connect(mapStateToProps, mapDispatchToProps)(ConnectedDashboard);  

export default Dashboard;