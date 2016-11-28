import React, { Component } from 'react';

class LedeteksterOppg extends Component {
  render() {
    return (
      <div>
        <h2>Ledetekster oppgave</h2>
        <p>Se om du kan løse oppgaven ved å:</p>
        <ul>
          <li>Inspisere kode</li>
          <li>Museklikk</li>
          <li>Bruke skjermleser</li>
          <li>Bruke axe</li>
        </ul>
        <h3>Finn én feil</h3>
        <div className="mol_emphasisbox grey">
          <form>
            <span>Navn:</span>
            <input type="text" id="tekst" />
          </form>
        </div>
      </div>
    );
  }
}

export default LedeteksterOppg;