import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Flashcards from "../../components/Flashcards";
import "./dashboard.css";
import {connect} from "react-redux";


const mapStateToProps = state => {
    console.log(state);
    return {user: state[0]};
}

class ConnectedDashboard extends React.Component {
    state = {
        firstName: '',
        id: '',
        flashcards: [],
        filteredFlashcards: []
    }

    handleDeleteButton = (flashcardToRemove) => {
        this.setState((prevState) => ({
            flashcards: prevState.flashcards.filter((flashcard) => flashcardToRemove !== flashcard)
        }))
        console.log("delete button clicked");

    }

    componentDidMount() {

        this.setState({
            firstName: this.props.user.firstName,
            id:this.props.user.id
        })

        let self = this;
        var data = {
          user_id: this.props.user.id
        };

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
                flashcards: data,
                filteredFlashcards: data
            })
        }).catch(err => {
            console.log('caught it!', err);
        })
    } 

    filterOnClick = event => {
        let filterValue = event.target.id;
        console.log(filterValue);

        let filtered = [];

        for (var i = 0; i < this.state.flashcards.length; i++) {
            if (this.state.flashcards[i].subject === filterValue) {
                filtered.push(this.state.flashcards[i]);
            }
        }

        this.setState({ filteredFlashcards: filtered });
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
                                <button className="filter standard white-button" id="math" onClick={this.filterOnClick}>math</button>
                                <button className="filter standard white-button" id="science" onClick={this.filterOnClick}>science</button>
                                <button className="filter standard white-button" id="english" onClick={this.filterOnClick}>english</button>
                            </div>
                        </div>
                    </div>

		            <Flashcards 
                     flashcards = {this.state.flashcards} 
                     handleDeleteButton = {this.handleDeleteButton}
		            />
		        </div>
            </div>
        );
    }
};

const Dashboard = connect(mapStateToProps)(ConnectedDashboard);  

export default Dashboard;