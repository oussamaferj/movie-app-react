import React from "react";
import ReactDOM from "react-dom";
import "./search.css";

class Search extends React.Component {
  constructor(props) {
    super(props);
    
  };
  changetext=(event)=>{
   this.props.search(event.target.value);
   if (event.target.value===""){
     console.log("test");
    this.props.search("");
   }
  };
  

  render() {
    return (
      <div>
        <form className="example">
          <input
            type="text"
            placeholder="Type Movie Name to Search"
            name="search"
            onChange={this.changetext}
          />
          <button value="Search">
            <i className="fa fa-search" />
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
