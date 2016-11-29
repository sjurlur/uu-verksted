import React, { Component } from 'react';

class Skjermleser extends Component {
  render() {
    return (
      <div>
       <p>Skjermlesere er dataprogrammer som blir brukt for å lese opp innholdet på skjermen. 
        De er svært nyttige for testing av universell utforming, da de sier hva elementene faktisk er, og ikke
        bare hvordan de ser ut. 
       </p>
       <p>
         Før du går i gang med denne bolken må du installere en extension til Chrome, <a href="http://www.chromevox.com/">ChromeVox</a>.
         Når du har gjort det kan du blabla.. 
       </p>

      </div>
    );
  }
}

export default Skjermleser;
