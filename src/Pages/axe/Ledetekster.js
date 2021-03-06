import React, { Component } from 'react';

class LedeteksterOppg extends Component {
  render() {
    return (
      <div>
        <h2>Ledetekster</h2>
        <p>Alle input-felt må ha ledetekster. Disse kodes med elementet <code>&lt;label&gt;</code>. 
          Ledetekst og input-felt må også være koblet sammen.
        </p>
        <p>
          En enkel måte å teste om input-feltet og ledeteksten er koblet sammen på, er ved å trykke på ledeteksten.
          Fokusmarkøren skal da havne i input-feltet. 
        </p>
        <h3>Oppgave</h3>
        <p>Finn én feil. Både ved bruk av axe og museklikk.</p>
        <div className="mol_emphasisbox grey">
          <form>
            <label htmlFor="tekst1">Fornavn:</label>
            <input type="text" id="tekst1" />
          </form><br/>
          <form>
            <span>Baknavn:</span>
            <input type="text" id="tekst" />
          </form>
        </div>
      </div>
    );
  }
}

export default LedeteksterOppg;