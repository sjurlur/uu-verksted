import React, { Component } from 'react';
import './Tastaturnavigasjon.css';

class Tastaturnavigasjon extends Component {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
    this.state = { clicked: false };
  }

  click(e) {
    e.preventDefault();
    this.setState({ clicked: true });
    setTimeout(() => {
      this.setState({ clicked: false });
    }, 1000);
  }

  render() {
    const clicked = this.state.clicked ? 'Klikk registrert' : null;
    return (
      <div className="page_tastaturnavigasjon">
        <a href="https://uu.difi.no/artikkel/2015/07/tastaturnavigering">Difis artikkel om tastaturnavigering</a>
        <p>Det skal være mulig å navigere på nettsiden ved bruk av tastatur. Se tabellen under for hvordan man 
        bruker tastaturnavigasjon for de mest vanlige elementene. Tabellen er ett utdrag fra webAims artikkel
        &nbsp;<a href="http://webaim.org/techniques/keyboard/">keyboard accessibility</a></p>

        <p>Alle elementer som kan få fokus ved tastaturnavigasjon skal ha <b>tydelig fokusmarkør</b></p>

        <table className="borders">
          <thead>
            <tr>
              <th scope="col">Interaction </th>
              <th scope="col">Keystrokes</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>Navigate to most elements</td>
            <td><ul>
              <li><span className="keycap">Tab</span></li>
              <li><span className="keycap">Shift</span> + <span className="keycap">Tab</span> - navigate backward</li>
            </ul>     </td>
          </tr>
          <tr>
            <td>Link</td>
            <td><span className="keycap">Enter</span></td>
          </tr>
          <tr>
            <td>Button</td>
            <td><span className="keycap">Enter</span> or <span className="keycap">Spacebar</span></td>
          </tr>
          <tr>
            <td>Checkbox</td>
            <td><span className="keycap">Spacebar</span> - check/uncheck a checkbox</td>
          </tr>
          <tr>
            <td>Radio buttons</td>
            <td>
              <ul>
                <li><span className="keycap">↑</span>/<span className="keycap">↓</span> or <span className="keycap">←</span>/<span className="keycap">→</span> - select an option. </li>
                <li><span className="keycap">Tab</span> - move to the next element.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Select (dropdown) menu</td>
            <td>
              <ul>
                <li><span className="keycap">↑</span>/<span className="keycap">↓</span> - navigate between menu options</li>
                <li><span className="keycap">Spacebar</span> - expand</li>
              </ul>
            </td>
          </tr>
        </tbody></table>

        <h2>Eksempel</h2>
        <p>Bruk tastatur for å navigere i de forskjellige elementene.</p>
        <form>
          <label htmlFor="tekst">Navn:</label>
          <input type="text" id="tekst" />
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
          
          <input type="checkbox" id="check" />
          <label htmlFor="check">Sjekk?</label>
          
          <select>
            <option>Valg 1</option>
            <option>Valg 2</option>
            <option>Valg 3</option>
          </select>

          <button type="submit" className="actionbutton" onClick={this.click}>Send</button>
          <br/>
          {clicked}
        </form>
      </div>
    );
  }
}

export default Tastaturnavigasjon;