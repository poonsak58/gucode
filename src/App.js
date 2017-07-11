import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    imageUrl: ""
  }

  componentDidMount(){
    fetch('https://api.giphy.com/v1/gifs/random?api_key=9b983d3f6ec94d748ce1f944b2624161&tag=&rating=G')
    .then( res => res.json() )
    .then( json => json.data.image_url )
    .then( (imageUrl) => {
      console.log(imageUrl);
      // this.state.imageUrl = imageUrl;
      this.setState({
        imageUrl: imageUrl
      })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="rainbow">กูโค้ด</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <br/>
          <img src={this.state.imageUrl}/>
        </p>
      </div>
    );
  }
}

export default App;
