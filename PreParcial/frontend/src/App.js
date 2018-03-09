import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      reviews:[]
    };
  }
  componentDidMount(){
    fetch("/api/reviews")
    .then((res)=>{
      const c =JSON.stringify(res);
      console.log(res.status);
      //       if((res.status ==="200"){
      //   console.log("error getting data");
      // }      
      return res.json;
    }).then((json)=>{
      this.setState({
        reviews:json
      });
    });
  }

  
  render() {
    return (
      <div className="App">
      <h1>Reviews</h1>
      <h1>{this.state.reviews}</h1>
      </div>
    );
  }
}

export default App;
