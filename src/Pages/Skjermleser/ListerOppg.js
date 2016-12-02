import React, { Component } from 'react';

class ListerOppg extends Component {
  render() {
    return (
      <div>
        <h2>Lister</h2>
        <p>
          Undersøk siden med skjermleser. Er det samsvar mellom presentasjon og koding?
        </p>
        <div className="mol_emphasisbox grey">
          <h4>Ting man kan ha i skoen</h4>
          <div className="page_skjermleser__divlist">
            <div>Såle</div>
            <div>Sokk</div>
            <div>Stein</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListerOppg;
