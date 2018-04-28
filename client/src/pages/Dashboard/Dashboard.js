import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Flashcards from '../../components/Flashcards';
import {connect} from "react-redux";

const mapStateToProps = state => {
    console.log(state);
    return {user: state[0]};
}

class ConnectedDashboard extends React.Component{
    state = {
        firstName: '',
        id: '',
        flashcards: []
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

        var data = {
            user_id:this.props.user.id
        }

        // this.setState({
        //     firstName: localStorage.getItem('user'),
        //     id: localStorage.getItem('id')
        // })
        let self = this;
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
                flashcards: data
            })

        }).catch(err => {
            console.log('caught it!', err);
        })
       } 
    


    
    render() {
        return (
            <div>
	            <Navbar firstName={this.state.firstName}/>

	            <div className="container">
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

