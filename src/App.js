import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render(){
    return(
      <div>
        <h1>Hello Dojo!</h1>
        <h3>Things I need to do:</h3>
        <ul>
          <li>Learn React</li>
          <li>Climb Mt. Everest</li>
          <li>Run a Marathon</li>
          <li>Feed the Dogs</li>
        </ul>
      </div>   
    );
  }
}

export default App;
