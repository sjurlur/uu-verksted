import React, { Component } from 'react';
import Expander from '../../Components/Expander/Expander';

class Hjelpetekster extends Component {
  render() {
    return (
      <div>
        <h2>Hidden text</h2>
        <p>
          In most cases, all text should be visible for all users. But sometimes we want to hide text visually and only show it to screen readers. 
        </p> 
        <h3>Exercise</h3>
        <p>Find the hidden text</p>
        <div className="mol_emphasisbox grey">
          <button className="atom_inline-btn close labelinvisible"><span>Close</span></button>
        </div>
        <br/>
        <Expander text="Show answers">
          <ul>
            <li>The close button has the hidden text "close"</li>
          </ul>
        </Expander>
      </div>
    );
  }
}

export default Hjelpetekster;
