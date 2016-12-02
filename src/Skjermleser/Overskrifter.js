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
          Se gjennom overskriftene på denne siden med skjermleseren. Hvilket nivå er de på?
        </p>
        <div className="mol_emphasisbox grey">
          <h3>Synes du foreldrene dine er strenge?</h3>
          <p>Hvor går du? Hvem er du sammen med? Hva skal dere gjøre? Ta på deg mer klær! Kom hjem før klokka tolv!</p>
          <h4>Foreldre skal sette grenser</h4>
          <p>Foreldre setter grenser og rammer for deg for at du skal få et trygt «rom» å utvikle deg i. Reglene og rammene skaper veggene i ditt rom som noen ganger vil føles for lite og trangt.</p>
          <h4>​Noe å tenke på når foreldre er strenge:</h4>
          <p>Du skal lære å passe på deg selv for din egen skyld – ikke andres</p>
          <h2>Hvordan snakke med barn om sterke medieinntrykk?</h2>
          <p>Spill DVDer eller videoer av barnas yndlingsprogrammer i stedet.</p>
        </div>
      </div>
    );
  }
}

export default Overskrifter;
