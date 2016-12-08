import React, { Component } from 'react';
import Expander from '../../Components/Expander/Expander';
import classNames from 'classnames';

class SkjermleserOppg extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Exercise</h2>
        <p>This page contains three errors. See if you can find them using ChromeVox only.</p>
        <div className="mol_emphasisbox grey">
          Ingredients in a pizza pie:
          <ul>
            <li>
              1 aubergine<br />
              3 Salt<br />
              2 red peppers<br />
              450g plum tomatoes<br />
              9 Mozzarella cheese<br />
              3 Cheese<br />
              2 Cheese
            </li>
          </ul>
          <div className="atom_messagebox lvl1 error">
            <div className="content">
              <p>
                Ahoy!
              </p>
              <p>
                This is an error message
                <button className="atom_inline-btn close page_skjermleser__closebutton"></button>
              </p>
            </div>
          </div>
        </div>
        <br />
        <Expander text="Vis fasit">
          <ul>
            <li>The list only contains one list-element</li>
            <li>The heading in the error message is not coded as a heading</li>
            <li>The close button does not have any text</li>
          </ul>
        </Expander>
      </div>
    );
  }
}

export default SkjermleserOppg;
