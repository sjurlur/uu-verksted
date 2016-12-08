import React, { Component } from 'react';

class ListerOppg extends Component {
  render() {
    return (
      <div>
        <h2>Lists</h2>
        <p>
          Which of these lists is not coded as a list?
        </p>
        <div className="mol_emphasisbox grey">
          <h4>Fruits in pizza hawaii</h4>
          <ul>
            <li>Pineapple</li>
            <li>Only pinapple</li>
          </ul>
          <h4>House pets</h4>
          <div className="page_skjermleser__divlist">
            <div>Dog</div>
            <div>Cat</div>
            <div>Raccoon</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListerOppg;
