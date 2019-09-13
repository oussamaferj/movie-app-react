import React from 'react';
import logo from './logo.svg';
import Moviecontainer from "./component/moviecontainer";
import './App.css'

function WithLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return (<Component {...props} />);
    return (<div class="sk-fading-circle">
    <div class="sk-circle1 sk-circle"></div>
    <div class="sk-circle2 sk-circle"></div>
    <div class="sk-circle3 sk-circle"></div>
    <div class="sk-circle4 sk-circle"></div>
    <div class="sk-circle5 sk-circle"></div>
    <div class="sk-circle6 sk-circle"></div>
    <div class="sk-circle7 sk-circle"></div>
    <div class="sk-circle8 sk-circle"></div>
    <div class="sk-circle9 sk-circle"></div>
    <div class="sk-circle10 sk-circle"></div>
    <div class="sk-circle11 sk-circle"></div>
    <div class="sk-circle12 sk-circle"></div>
  </div>);
  }
}

const Listloading = WithLoading(Moviecontainer);

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      loading:true,
    }
  }
  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 3000);
  }
  render(){
    return(
     <div className="App">
      <Listloading isLoading={this.state.loading} />
    </div>

    )
  }
}
 

export default App;
