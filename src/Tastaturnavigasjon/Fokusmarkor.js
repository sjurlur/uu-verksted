import React, { Component } from 'react';
import './Fokusmarkor.css';

class Fokusmarkor extends Component {
  render() {
    return (
      <div className="page_fokusmarkor">
        <h2>Fokusmarkør</h2>
        <p>Alle elementer som kan få fokus ved tastaturnavigasjon skal ha <b>tydelig fokusmarkør</b></p>
        <h3>Finn én feil</h3>
        <div className="mol_emphasisbox grey">
          <button className="actionbutton">Lagre</button>
          <button className="atom_secondarybutton">Avbryt</button>
        </div>
      </div>
    );
  }
}

export default Fokusmarkor;