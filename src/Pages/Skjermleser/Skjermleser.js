import React, { Component } from 'react';

class Skjermleser extends Component {
  render() {
    return (
      <div>
       <p>Skjermlesere er dataprogrammer som blir brukt for å lese opp innholdet på skjermen. 
        De er nyttige for testing av tilgjengelighet, da de leser opp hva elementene er kodet som. Dermed kan vi se om 
        sidene er kodet riktig og finne eventuelle utfordringer for brukere som benytter hjelpeteknologi.  
       </p>
      <h2>Hvordan navigere med ChromeVox</h2>
      <ul>
        <li>For å starte ChromeVox. Trykk på <code>ctrl + alt + a + a</code></li>
        <li>Naviger forover med <code>ctrl + alt + pil ned</code></li>
        <li>Naviger bakover med <code>ctrl + alt + pil opp</code></li>
        <li>"Zoom inn" med <code>ctrl + alt + +</code></li>
        <li>"Zoom ut" med <code>ctrl + alt + -</code></li>
        <li>For å få den til å være stille, trykk <code>ctrl</code></li>
      </ul>
       <h2>Oppgave</h2>
        <p>Naviger gjennom denne siden ved bruk av ChromeVox</p>
      </div>
    );
  }
}

export default Skjermleser;
