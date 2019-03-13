import React, { Component } from 'react';
//import { Container, Row, Col } from 'reactstrap';
import Header from './components/Header';
import Intro from './components/Intro';
import Network from './components/Network';
import Skills from './components/Skills';
import Work from './components/Work';
import ViaFoci from './components/ViaFoci';
import Logo from './components/Logo';
import Art from './components/Art';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Intro />
        <Network />
        <Skills />
        <Work />
        <ViaFoci />
        <Logo />
        <Art />
      </div>
    );
  }
}

export default App;
