import React from "react";

export default class Question extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <h2 className="qh2">question one</h2>
        </div>

        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <h3 className="qh3">what is the question?</h3>
          <input className="addnew" type="text" id="q1text" />
          <h3 className="qh3">what are the possible answers?</h3>
          <input className="addnew" type="text" id="q1a1" placeholder="1" />
          <input className="addnew" type="text" id="q1a2" placeholder="2" />
          <input className="addnew" type="text" id="q1a3" placeholder="3" />
          <h3 className="qh3">which answer is correct?</h3>
          <input
            className="addnew"
            type="text"
            id="correct1"
            placeholder="enter 1, 2, or 3"
          />
        </div>
      </div>
    );
  }
}
