import React, { Component } from 'react';

class Gruppering extends Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default Gruppering;