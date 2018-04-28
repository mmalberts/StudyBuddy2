import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Flashcards from '../../components/Flashcards';

export default class Dashboard extends React.Component{
    state = {
        firstName: localStorage.getItem('user'),
        id: localStorage.getItem('id'),
        flashcards: []
    }

    handleDeleteButton = (flashcardToRemove) => {
        this.setState((prevState) => ({
            flashcards: prevState.flashcards.filter((flashcard) => flashcardToRemove !== flashcard)
        }))
        console.log("delete button clicked");

    }

    componentDidMount() {

        setTimeout(() => {
        var data = {
            user_id:localStorage.getItem('id')
        };

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
       }, 100) 
    }


    
    render() {
        return (
            <div>
	            <Navbar firstName={localStorage.getItem('user')}/>

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
