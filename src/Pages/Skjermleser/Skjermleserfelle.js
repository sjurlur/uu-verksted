import React, { Component } from 'react';

class Skjermleserfelle extends Component {
  render() {
    return (
      <div>
        <h2>Skjule innhold for skjermleser</h2>
        <p>Dersom noe er skjult visuelt skal det (foruten hjelpetekster) også være skjult for skjermleser. </p>
        <h3>Eksempel</h3>
        <p>
          Undersøk hvordan det høres ut når innhold ikke er skjult for skjermleser. 
        </p>
        <div className="mol_emphasisbox grey">
          <button className="atom_inline-navigationbutton arrow-after arrow-down" aria-expanded="false">Vis detaljer</button>
          <div className="visuallyhidden">
            <p>Det skjedde i de dager at det gikk ut befaling fra keiser Augustus om at hele verden skulle innskrives i manntall. Denne første innskrivning ble holdt mens Kvirinius var landshøvding i Syria. Og alle drog av sted for å la seg innskrive, hver til sin by. </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Skjermleserfelle;
