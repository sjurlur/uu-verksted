import React, { Component } from 'react';

class GrupperingOppg extends Component {
  render() {
    return (
      <div>
        <h2>Gruppering</h2>
        <p>
          Undersøk hvordan det ser ut når radioknapper ikke er gruppert.           
        </p>
        <h3>Eksempel</h3>
        <div className="mol_emphasisbox grey">
        <form>
          <legend>Vil du høre en vits?</legend>
          <div>
            <input type="radio" name="radio" id="ja" value="ja"/>
            <label htmlFor="ja">Ja</label>
          </div>
          <div>
            <input type="radio" name="radio" id="nei" value="nei"/>
            <label htmlFor="nei">Nei</label>
          </div>
        </form>
        </div>
      </div>
    );
  }
}

export default GrupperingOppg;