import React from "react";
import ReactDOM from "react-dom";
import Search from "./search";
import Stars from "./stars";
import Moviecard from "./moviecard";

const movies = [
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg",
    date: "2014",
    rate: 5,
    title: "interstellar"
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
    date: "2017",
    rate: 4,
    title: "getout"
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    date: "2019",
    rate: 5,
    title: "avengers endgame"
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    date: "2019",
    rate: 5,
    title: "avengers endgame"
  }
];

class Moviecontainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieslist: movies,
      image: "",
      date: "",
      rate: "",
      title: "",
      rating: 5,
      searchtext: "",
      
    };
  }

  

  addMovie = data => {
    this.setState({
      movieslist: [
        ...this.state.movieslist,
        {
          title: data.title,
          rate: data.rate,
          image: data.image,
          date: data.date
        }
      ]
    });
  };
  rating = ratedata => {
    this.setState({
      rating: ratedata
    });
  };
  search = searchdata => {
    this.setState({
      searchtext: searchdata
    });
  };
  listfilterrate = el => {
    return el.rate <= this.state.rating;
  };
  listfiltersearch = el => {
    return el.title.includes(this.state.searchtext);
  };

  render() {
    console.log("hi");
    return (
      <div>
     
        <Search search={this.search} />
        <Stars rate={this.rating} />
        <Moviecard
          list={this.state.movieslist
            .filter(el => this.listfilterrate(el))
            .filter(el => this.listfiltersearch(el))
          }
          add={this.addMovie}
        />
      </div>
    );
  }
}

export default Moviecontainer;
