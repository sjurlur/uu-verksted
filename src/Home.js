import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';

class Home extends Component {
  render() {
    return (
      <div className="layout-container">
        <h1 className="heading--border-bottom">Universell utforming for testere</h1>
        <p>Verkstedet skal lære deg praktisk testing av universell utforming. Vi vil gå gjennom de mest vanlige feilene på helsenorge.no, og verktøy
        vi kan bruke for å finne dem.</p>
        <p>
          Før du går i gang må du ha lastet ned og installert:
        </p>
        <ul>
          <li><a href="https://www.google.com/chrome/browser/desktop/index.html">Google Chrome</a></li>
          <li><a href="https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd">aXe for chrome</a></li>
          <li><a href="http://www.chromevox.com/">ChromeVox</a></li>
        </ul>
        
        <h2>Oppgaver</h2>
        <p>
          Oppgavene er delt inn i tre bolker. En for hvert verktøy. Hver bolk avsluttes med en større oppgave hvor du skal bruke alt du har lært. Start på toppen og jobb deg gjennom. 
        </p>
        <ul>
          <li><Link to="/axe">aXe</Link></li>
          <li><Link to="/tastaturnavigasjon">Tastaturnavigasjon</Link></li>
          <li><Link to="/skjermleser">Skjermleser</Link></li>
        </ul>
      </div>
    );
  }
}

export default Home;