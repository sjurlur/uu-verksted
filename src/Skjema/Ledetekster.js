import React, { Component } from 'react';

class Skjema extends Component {
  render() {
    return (
      <div>
        <h2>Ledetekster</h2>
        <p>
          Alle input-felt må ha ledetekster. Disse kodes med elementet <code>&lt;label&gt;</code>. 
          Ledetekst og input-felt må kobles sammen. Det gjøres ved å sette en id på input-feltet og referere
          til denne i ledeteksten med for="id"-attributten. <code>&lt;label for="id-til-input&gt;</code>
        </p>
        <p>
          En enkel måte å teste om input-feltet og ledeteksten er koblet sammen på, er ved å trykke på ledeteksten.
          Fokusmarkøren skal da havne i input-feltet. Det kan også testes med skjermleser, axe, eller ved å inspisere kode. 
        </p>
        <h3>Eksempel</h3>
        <div className="mol_emphasisbox grey">
          <form>
            <label htmlFor="tekst">Navn:</label>
            <input type="text" id="tekst" />
          </form>
        </div>
      </div>
    );
  }
}

export default Skjema;