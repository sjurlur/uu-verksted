import React, { Component } from 'react';

class Pakrevd extends Component {
  render() {
    return (
      <div>
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

export default Pakrevd;