import React from "react";
import { Link } from "react-router-dom";
import "./Question.css";

export default class Questions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            question: "",
            answer1: "",
            answer2: "",
            answer3: "",
            correctAnswer: "1",
            UnitId: this.props.unitId,
            gotItRight: false,
            cardId: 1,
            unitPageLink: "/unit/" + this.props.unitId
        };
    }; 

    saveAndIncrement = e => {
        e.preventDefault();

        let data = {
            question: this.state.question,
            answer1: this.state.answer1,
            answer2: this.state.answer2,
            answer3: this.state.answer3,
            correctAnswer: this.state.correctAnswer,
            UnitId: this.state.UnitId,
            gotItRight: this.state.gotItRight,
            cardId: this.state.cardId
        };

        fetch("/api/cards", {
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
        });

        let number = this.state.cardId + 1;
    
        this.setState({
            question: "",
            answer1: "",
            answer2: "",
            answer3: "",
            correctAnswer: "",
            cardId: number
        });

        window.location.reload();
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    backToUnit = {

    }

    render() {
        return (
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <h2 className="qh2">question {this.state.number}</h2>
                
                <h3 className="qh3">what is the question?</h3>
                <input
                    className="form-input"
                    value={this.state.question}
                    type="text"
                    name="question"
                    onChange={this.handleChange}
                />

                <h3 className="qh3">what are the possible answers?</h3>
                <input
                    className="form-input"
                    value={this.state.answer1}
                    onChange={this.handleChange}
                    type="text"
                    name="answer1"
                    placeholder="1"
                />
                <input
                    className="form-input"
                    value={this.state.answer2}
                    onChange={this.handleChange}
                    type="text"
                    name="answer2"
                    placeholder="2"
                />
                <input
                    className="form-input"
                    value={this.state.answer3}
                    onChange={this.handleChange}
                    type="text"
                    name="answer3"
                    placeholder="3"
                />

                <h3 className="qh3">which answer is correct?</h3>
                <select 
                    className="form-control"
                    name="correctAnswer"
                    value={this.state.correctAnswer}
                    id="correct"
                    onChange={this.handleChange}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>

                <button
                    className="white-button save oversized"
                    onClick={this.saveAndIncrement}
                >
                    save question
                </button>

                <Link to={this.state.unitPageLink}>
                    <button
                        className="white-button create oversized"
                        id="submit"
                    >
                        back
                    </button>
                </Link>
            </div>
        );
    };
};