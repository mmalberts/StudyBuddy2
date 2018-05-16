import React, { Component } from "react";
import { connect } from "react-redux";
import CreateQuestion from "../../components/Question/CreateQuestion";
import Navbar from "../../components/Navbar";
import "./AddQuestion.css";

const mapStateToProps = state => {
    return { user: state[0] };
};

class AddQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = { userQuestions: [] };
    };

    componentDidMount() {
        let self = this;

        var data = {
            UserId: this.props.match.params.unitId
        };

        fetch("/api/cards/" + this.props.match.params.unitId, {
            method: "POST",
            body: data
        }).then(response => {
            return response.json();
        }).then(responseJson => {
            self.setState({ userQuestions: responseJson });
        }).catch(err => {
            console.log("Error: " + err);
        });
    };

    handleDeleteQuestion = e => {
        var url = "/api/cards/delete/" + e.target.id;
        fetch(url, {
            method: "DELETE"
        }).then(response => response.json);
        
        window.location.reload();
    };

    render() {
        return (
            <div>
                <Navbar firstName={this.props.user.firstName} />

                <div className="container">
                    <div className="qholder">
                        <h2 className="qh2 spaced">existing questions</h2>
                        {this.state.userQuestions && (
                            <div>
                                {this.state.userQuestions.map(q => (
                                    <p>
                                        <button
                                            key={q.id}
                                            id={q.id}
                                            onClick={this.handleDeleteQuestion}
                                            className="white-delete"
                                        >
                                            x
                                        </button>
                                        {q.question}
                                        </p>
                                ))}
                            </div>
                        )}

                        <CreateQuestion unitId={this.props.match.params.unitId} />
                    </div>
                </div>
            </div>
        );
    };
};

export default connect(mapStateToProps)(AddQuestion);
