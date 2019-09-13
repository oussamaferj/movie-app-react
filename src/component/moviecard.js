import React from "react";
import ReactDOM from "react-dom";
import "./moviecard.css";
import Movieadd from "./movieadd";

class Moviecard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var stars = "★";
  
    return (
      <div className="card-title">
        { this.props.list.map(el => (
          <div className="card">
              <p className="card-rating">
              {stars.repeat(el.rate).padEnd(5, "☆")}
            </p>
            <img className="card-image" src={el.image} />
            
            <h3>
              {el.title}-{el.date}
            </h3>
          </div>
        ))}
        <Movieadd add={this.props.add}/>
      </div>
    );
  }
}

export default Moviecard;
