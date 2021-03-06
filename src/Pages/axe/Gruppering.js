import React, { Component } from 'react';

class Gruppering extends Component {
  render() {
    return (
      <div>
        <h2>Gruppering</h2>
        <p>
          Radioknapper må grupperes. Checkbokser bør grupperes. Det gjøres med elementet <code>&lt;fieldset&gt;</code>. Tekst som beskriver gruppen legges i&nbsp;
          <code>&lt;legend&gt;</code>.
        </p>
        <h3>Oppgave</h3>
        <p>
          Bruk aXe til å finne ikke-grupperte radioknapper. 
        </p>
        <div className="mol_emphasisbox grey">
          <fieldset>
            <legend>Send meg epost daglig</legend>
            <div>
              <input type="radio" name="radio" id="ja1" value="ja"/>
              <label htmlFor="ja1">Ja</label>
            </div>
            <div>
              <input type="radio" name="radio" id="nei1" value="nei"/>
              <label htmlFor="nei1">Nei</label>
            </div>
          </fieldset>
          <form>
            <legend>Send meg epost nattlig</legend>
            <div>
              <input type="radio" name="radio2" id="ja" value="ja"/>
              <label htmlFor="ja">Ja</label>
            </div>
            <div>
              <input type="radio" name="radio2" id="nei" value="nei"/>
              <label htmlFor="nei">Nei</label>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Gruppering;