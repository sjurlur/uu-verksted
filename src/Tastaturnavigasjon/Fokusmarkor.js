import React, { Component } from 'react';
import './Fokusmarkor.css';

class Fokusmarkor extends Component {
  render() {
    return (
      <div className="page_fokusmarkor">
        <h2>Finn én feil</h2>
        <div className="mol_emphasisbox grey">
          <button className="actionbutton">Lagre</button>
          <button className="atom_secondarybutton">Avbryt</button>
        </div>
      </div>
    );
  }
}

export default Fokusmarkor;