import React from "react";
import ReactDOM from "react-dom";
class Movieadd extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: false, title: "", rate:1 ,image:"",date:""};
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  handleClick = event => {
    if (this.state.rate.match(/[0-5]/g) && (this.state.date.match(/[0-9]/g))) {
    this.props.add(this.state);
    this.props.closePopup();
  }
  else{
    alert("Please Verify the Inputs");
  }
  };
  render() {
    return (
      <div>
        <div className="popup">
          <div className="popup_inner">
            <h1>Add Movie</h1>
            <button className="btnclose" onClick={this.props.closePopup}>
              ×
            </button>
            <div className="movieadd">
              <p>Picture Url :</p>
              <input type="text" value={this.state.image} onChange={evt => {
                  this.setState({
                    image: evt.target.value
                  });
                }}/>
              <p>Title :</p>
              <input
                type="text"
                name="title"
                value={this.state.title}
                onChange={evt => {
                  
                  this.setState({
                    title: evt.target.value
                  });
                  
                }}
              />
              <p>Rate :</p>
              <input
                type="text"
                value={this.state.rate}
                onChange={evt => {
                  if (evt.target.value.length<2){
                  this.setState({
                    rate: evt.target.value
                  });}
                }}
              />
              <p>Date :</p>
              <input type="text" value={this.state.date} onChange={evt => {
                 if (evt.target.value.length<5){
                  this.setState({
                    date: evt.target.value
                  });
                }
                }}/>
              <button className="btnadd" onClick={this.handleClick} >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: false };
  }

  togglePopup = () => {
    this.setState({
      showPopup: !this.state.showPopup
    });
  };

  render() {
    return (
      <div>
        <div className="card">
          <label className="plus" onClick={this.togglePopup}>
            +
          </label>
        </div>

        {this.state.showPopup ? (
          <Movieadd closePopup={this.togglePopup} add={this.props.add} />
        ) : null}
      </div>
    );
  }
}

export default Popup;
