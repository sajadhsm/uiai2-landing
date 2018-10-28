import React, { Component } from 'react';
import './App.css';

import Hero from './components/Hero/Hero';
import Description from './components/Description/Description';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <Description />
      </div>
    );
  }
}

export default App;
