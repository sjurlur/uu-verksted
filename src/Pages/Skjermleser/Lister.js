import React, { Component } from 'react';

class Lister extends Component {
  render() {
    return (
      <div>
        <h2>Lists</h2>
        <p>
          Lists should be coded as lists.  
        </p>
        
        <h3>Exercise</h3>
        <p>Navigate through the lists</p>
        <div className="mol_emphasisbox grey">
          <h4>House pets</h4>
          <ul>
            <li>Dog</li>
            <li>Cat</li>
            <li>Raccoon</li>
          </ul>

          <h4>My favourite fruits</h4>
          <ol>
            <li>Pineapple</li>
            <li>Avocado</li>
            <li>Fig</li>
            <li>Grape</li>
          </ol>
        </div>

      </div>
    );
  }
}

export default Lister;
