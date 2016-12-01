import React, { Component } from 'react';
import './Fokusmarkor.css';

class Fokusmarkor extends Component {
  render() {
    return (
      <div className="page_fokusmarkor">
        <h2>Fokusmarkør</h2>
        <p>Alle elementer som kan få fokus ved tastaturnavigasjon skal ha <b>tydelig fokusmarkør</b>. Elementer som får fokusmarkør
        skal det i de fleste tilfeller også være mulig å trykke på</p>
        <h3>Oppgave</h3>
        <p>Finn elementet uten fokusmarkør</p>
        <div className="mol_emphasisbox grey">
          <button className="actionbutton">Lagre</button>
          <button className="atom_secondarybutton">Avbryt</button>
        </div>
      </div>
    );
  }
}

export default Fokusmarkor;