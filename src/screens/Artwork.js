import React, { Component } from 'react';
import Art from '../components/Art';
import '../App.scss';

class Artwork extends Component {
  render() {
    return (
      <div className="App">        
        <Art />
      </div>
    );
  }
}

export default Artwork;
