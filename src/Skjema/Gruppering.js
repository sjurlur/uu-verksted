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
        <h3>Eksempel</h3>
        <div className="mol_emphasisbox grey">
        <form>
          <fieldset>
            <legend>Send meg epost daglig</legend>
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
        </div>
      </div>
    );
  }
}

export default Gruppering;