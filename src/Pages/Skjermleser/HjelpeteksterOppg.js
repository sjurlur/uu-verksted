import React, { Component } from 'react';
import Expander from '../../Components/Expander/Expander';

class HjelpeteksterOppg extends Component {
  render() {
    return (
      <div>
        <h2>Hidden text</h2>
        <p>
          Two elements on this page should have hidden text. Which?
        </p>
        <div className="mol_emphasisbox grey">
          <button className="atom_inline-btn send labelinvisible"><span>Send</span></button><br/>
          <button className="atom_inline-btn close labelinvisible"></button><br/>
          <button className="atom_inline-navigationbutton arrow-down arrow-after">&nbsp;</button><br/>
        </div>
        <br/>
        <Expander text="Show answers">
          <ul>
            <li>The "x"-button</li>
            <li>The arrow</li>
          </ul>
        </Expander>
      </div>
    );
  }
}

export default HjelpeteksterOppg;
