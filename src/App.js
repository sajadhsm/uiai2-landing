import React, { Component } from 'react';
import './App.css';

import Hero from './components/Hero/Hero';
import Description from './components/Description/Description';
import Awards from './components/Awards/Awards';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <Description />
        <Awards />
      </div>
    );
  }
}

export default App;
