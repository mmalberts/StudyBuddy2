import React from "react";

export default class Question extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            correctAnswer: this.props.correctAnswer,
            chosenAns: ""
        };
    
        this.handleAnsClick = this.handleAnsClick.bind(this);
    };

    handleAnsClick(e) {
        var chAns = e.target.value;
        
        let ans = {
            correctAnswer: this.props.correctAnswer,
            chosenAns: chAns
        };

        this.props.handleAnsClick(ans);
    };

    render() {
        return (
            <div className="container-fluid">
                <div>
                    <h1 className="question">{this.props.question}</h1>
                    <button
                        className="outline-button answer"
                        onClick={this.handleAnsClick}
                        value={this.props.answer1}
                    >
                        {this.props.answer1}
                    </button>

                    <button
                        key={this.props.answer2}
                        className="outline-button answer"
                        onClick={this.handleAnsClick}
                        value={this.props.answer2}
                    >
                        {this.props.answer2}
                    </button>

                    <button
                        key={this.props.answer3}
                        className="outline-button answer"
                        onClick={this.handleAnsClick}
                        value={this.props.answer3}
                    >
                        {this.props.answer3}
                    </button>
                </div>
            </div>
        );
    };
};