import React, { Component } from 'react';

class Lister extends Component {
  render() {
    return (
      <div>
        <h2>Lister</h2>
        <p>
          Lister skal være kodet som lister. 
        </p>
        
        <h3>Eksempel</h3>
        <p>Hør hvordan de forskjellige elementene høres ut med skjermleser</p>
        <div className="mol_emphasisbox grey">
          <h4>Ting man kan ha i skoen</h4>
          <ul>
            <li>Såle</li>
            <li>Sokk</li>
            <li>Stein</li>
          </ul>

          <h4>Rekkefølgen i gullrekka</h4>
          <ol>
            <li>Norge rundt</li>
            <li>Beat for beat</li>
            <li>Nytt på nytt</li>
            <li>Skavlan</li>
          </ol>
        </div>

      </div>
    );
  }
}

export default Lister;
