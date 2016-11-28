import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';

class Home extends Component {
  render() {
    return (
      <div className="layout-container">
        <h1>UU verksted</h1>
        <p>Verkstedet skal lære deg praktisk testing av universell utforming. Vi vil gå gjennom forskjellige verktøy som brukes til 
        testing, de mest vanlige feilene og hvordan man finner dem</p>
        <p>
          Før du går i gang må du ha lastet ned og installeret:
        </p>
        <ul>
          <li>Nettleseren <a href="https://www.google.com/chrome/browser/desktop/index.html">Google Chrome</a></li>
          <li><a href="https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd">aXe for chrome</a></li>
          <li>Skjermleseren <a href="http://www.windoweyesforoffice.com/">Windows-Eyes</a></li>
        </ul>
        
        <h2>Innholdsfortegnelse</h2>
        <ul>
          <li><Link to="/skjema">Skjema</Link></li>
          <li><Link to="/tastaturnavigasjon">Tastaturnavigasjon</Link></li>
        </ul>
      </div>
    );
  }
}

export default Home;