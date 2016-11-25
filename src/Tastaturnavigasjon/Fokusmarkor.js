import React, { Component } from 'react';
import './Fokusmarkor.css';

class Fokusmarkor extends Component {
  render() {
    return (
      <div>
        <h2>Finn én feil</h2>
        <button className="actionbutton">Lagre</button>
        <button className="atom_secondarybutton">Avbryt</button>
      </div>
    );
  }
}

export default Fokusmarkor;