import React, { Component } from 'react';
import './Skjema.css';

class Skjema extends Component {
  render() {
    return (
      <div className="page_skjema">
        <h1>Skjema</h1>
        <a href="https://uu.difi.no/artikkel/2015/07/skjema">Difis artikkel om skjema</a>
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
        <form>
          <label htmlFor="tekst">Navn:</label>
          <input type="text" id="tekst" />
        </form>

        <h2>Gruppering</h2>
        <p>
          Radioknapper må grupperes. Checkbokser bør grupperes. Det gjøres med elementene <code>&lt;fieldset&gt;</code> og
          <code>&lt;legend&gt;</code>
        </p>
        <h3>Eksempel</h3>
        <form>
          <fieldset>
            <legend>Vil du høre en vits?</legend>
            <div>
              <input type="radio" name="radio" id="ja" value="ja"/>
              <label htmlFor="ja">Ja</label>
            </div>
            <div>
              <input type="radio" name="radio" id="nei" value="nei"/>
              <label htmlFor="nei">Nei</label>
            </div>
          </fieldset>
        </form>

        <h2>Påkrevde felt</h2>
        <p>
          Påkrevde felt skal ha attributten <code>required</code> på input-feltet.
          Skjermleser vil da gi en indikasjon på at elementet må fylles ut.
        </p>
        <h3>Eksempel</h3>
        <form>
          <label htmlFor="tekstRequired">Navn <em>(må fylles ut)</em></label>
          <input type="text" id="tekstRequired" required/>
        </form>
      </div>
    );
  }
}

export default Skjema;