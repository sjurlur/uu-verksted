import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';

class Home extends Component {
  render() {
    return (
      <div className="layout-container">
        <h1>UU verksted</h1>
        Hvilke verktøy
        
        <ul>
          <li><Link to="/skjema">Skjema</Link></li>
          <li><Link to="/tastaturnavigasjon">Tastaturnavigasjon</Link></li>
        </ul>
      </div>
    );
  }
}

export default Home;