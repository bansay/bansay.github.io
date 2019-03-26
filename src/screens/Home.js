import React, { Component } from 'react';
import Intro from '../components/Intro';
import Skills from '../components/Skills';
import ViaFoci from '../components/ViaFoci';
import Logo from '../components/Logo';
import '../App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">        
        <Intro />
        <Skills />
        <ViaFoci />
        <Logo />
      </div>
    );
  }
}

export default App;
