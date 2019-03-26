import React, { Component } from 'react';
import Network from '../components/Network';
import GeneralContact from '../components/GeneralContact';
import '../App.scss';

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <GeneralContact />
        <Network />
      </div>
    );
  }
}

export default Contact;
