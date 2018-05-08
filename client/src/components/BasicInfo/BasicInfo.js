import React from "react";
import "./BasicInfo.css";

export default class BasicInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unitName: "",
      description: "",
      bg: ""
    };
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <h2 className="qh2">basic information</h2>
        </div>

        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <input
            className="addnew"
            type="text"
            id="setsubject"
            name="unitName"
            onChange={this.handleChange}
            placeholder="subject"
          />
          <input
            className="addnew largetext"
            type="text"
            id="description"
            name="description"
            onChange={this.handleChange}
            placeholder="description"
          />
          <input
            className="addnew"
            type="text"
            id="setbg"
            name="bg"
            onChange={this.handleChange}
            placeholder="background image url"
          />
          <button onClick={() => this.props.onClick(this.state.unitName)}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}
