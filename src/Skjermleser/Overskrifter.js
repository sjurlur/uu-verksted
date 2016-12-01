import React, { Component } from 'react';

class Overskrifter extends Component {
  render() {
    return (
      <div>
        <h2>Overskrifter</h2>
        <p>Tekst som ser ut som overskrifter skal være kodet som overskrifter. 
        Overskriftene skal ikke hoppe over noen overskriftsnivå. Det vil si at ikke kan gå 
        direkte fra nivå 1 til nivå 3.</p>
        <h3>Eksempel</h3>
        <p>
          Se gjennom alle overskriftene på denne siden med skjermleseren. Hvilket nivå er de på?
        </p>
        <div className="mol_emphasisbox grey">
          <h4>Overskrift</h4>
          <h4>Overskrift</h4>
          <h5>Overskrift</h5>
          <h2>Overskrift</h2>
        </div>
      </div>
    );
  }
}

export default Overskrifter;
