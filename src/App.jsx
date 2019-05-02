import React, { Component } from 'react';
import './assets/App.css';
import NumerifyCall from './components/numerifyCall.js';
import logo from './assets/logo-main.svg'

class App extends Component {
    render() {
    return (
      <div class="main">
        <div class="logo-container">
          <img src={logo} alt="logo"/>
        </div>      
        <div class="numerifyCall-container">
          <NumerifyCall />
        </div>
      </div>
    ); 
  } 
}

export default App;