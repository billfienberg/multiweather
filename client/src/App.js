import React, { Component } from 'react';
import CurrentCardList from './CurrentCardList';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="logoContainer">
            <h1>MultiWeather</h1>
          </div>
        </div>
        <CurrentCardList />
      </div>
    );
  }
}

export default App;
