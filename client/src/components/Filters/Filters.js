import React from "react";
import {addUser} from "../../actions/index";
import {connect} from "react-redux";
import "./Filters.css";

const mapDispatchToProps = dispatch => {
    return { addUser: user => dispatch(addUser(user)) };
};

const mapStateToProps = state => {
    return { user: state[0] };
};

class ConnectedFilters extends React.Component {
    state = {
        filteredFlashcards: this.props.user.filteredFlashcards
    }

	filterOnClick = event => {
        let filterValue = event.target.id;
        let filtered = [];

        for (var i = 0; i < this.state.filteredFlashcards.length; i++) {
            if (this.state.filteredFlashcards[i].subjectName === filterValue) {
                filtered.push(this.state.flashcards[i]);
            }
        }

        this.props.addUser({ 
        	firstName: this.props.user.firstName, 
        	id: this.props.user.id,
        	filteredFlashcards: filtered 
        });
    }
 
 	render() {
	    return (
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
	    )
	}
}

const Filters = connect(mapStateToProps, mapDispatchToProps)(ConnectedFilters);

export default Filters;