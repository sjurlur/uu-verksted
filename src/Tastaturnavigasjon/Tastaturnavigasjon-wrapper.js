import React, { Component } from 'react';
import './Tastaturnavigasjon.css';

class TastaturnavigasjonWrapper extends Component {
  render() {
    return (
      <div>
        <h1>Tastaturnavigasjon</h1>
        {this.props.children}
      </div>
    );
  }
}

export default TastaturnavigasjonWrapper;