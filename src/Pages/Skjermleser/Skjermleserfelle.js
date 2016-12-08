import React, { Component } from 'react';

class Skjermleserfelle extends Component {
  render() {
    return (
      <div>
        <h2>Hidden content</h2>
        <p>If something is hidden visually, it should (in most cases) also be hidden from screen readers</p>
        <h3>Exercise</h3>
        <p>
          Find the content that is hidden visually but not from screen readers. 
        </p>
        <div className="mol_emphasisbox grey">
          <button className="atom_inline-navigationbutton arrow-after arrow-down" aria-expanded="false">Show details</button>
          <div className="visuallyhidden">
            <p>You found it!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Skjermleserfelle;
