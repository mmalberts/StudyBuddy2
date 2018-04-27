import React from 'react';
import Navbar from './Navbar';

export default class QuestionPage extends React.Component {
    state = {
        title: "Vocabulary",
        user: "Amanda Ramirez",
        question: "Wow, isn't this a great question?",
        answer1: "ok",
        answer2: "e = mc^2",
        answer3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin felis nisl, consequat eu aliquet vitae, pulvinar sed orci."
    }
    
    render() {
        return (
            <div className="fitpage">
	            <Navbar firstName = {localStorage.getItem('user')}/>

                <div className="row info">
                    <button className="white-button mini-title">{this.state.title}</button>
                    <h3 className="mini-byline">by {this.state.user}</h3>
                </div>

                <div className="container text-center">
                    <div className="row content">
                        <h1 className="question">{this.state.question}</h1>
                        <button className="outline-button answer" id="1">{this.state.answer1}</button>
                        <button className="outline-button answer" id="2">{this.state.answer2}</button>
                        <button className="outline-button answer" id="3">{this.state.answer3}</button>
                    </div>
                </div>
            </div>
        )
    }
};