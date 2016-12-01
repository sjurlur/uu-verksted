import React, { Component } from 'react';

class Skjermleser extends Component {
  render() {
    return (
      <div>
       <p>Skjermlesere er dataprogrammer som blir brukt for å lese opp innholdet på skjermen. 
        De er svært nyttige for testing av tilgjengelighet, da de sier hva elementene faktisk er, og ikke
        bare hvordan de ser ut. 
       </p>
      <h2>Hvordan navigere med ChromeVox</h2>
      <ul>
        <li>For å starte ChromeVox. Trykk på <code>ctrl + alt + a + a</code></li>
        <li>Naviger forover med <code>ctrl + alt + pil ned</code></li>
        <li>Naviger forover med <code>ctrl + alt + pil opp</code></li>
      </ul>
       <h2>Oppgave</h2>
        <p>Naviger gjennom denne siden ved bruk av ChromeVox</p>
      </div>
    );
  }
}

export default Skjermleser;
