import React from 'react';
import "./filters.css";

class Filters extends React.Component {

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

export default Filters;