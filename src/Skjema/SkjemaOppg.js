import React, { Component } from 'react';
import './Skjema.css';
import Collapse from 'react-collapse';

class Skjema extends Component {
  constructor(props) {
    super(props);
    this.sendForm = this.sendForm.bind(this);
    this.state = {sent: false}
  }
  sendForm(evt) {
    console.log(evt);
    this.setState({ sent: true });
    setTimeout(() => {
      this.setState({ sent: false });
    }, 2000);
  }
  render() {
    const innsendt = this.state.sent ? 'Skjemaet er innsendt' : null;
    return (
      <div className="page_skjema__oppgave">
        <h2>Oppgave</h2>
        <p>Dette skjemaet inneholder fem feil. For å finne dem må du bruke både skjermleser, axe, og tastaturnavigasjon.</p>
        <div className="mol_emphasisbox grey">
          <form>
            <label htmlFor="navn">Fornavn: </label>
            <input type="text" id="navn"/>
            <span htmlFor="etternavn">Etternavn: </span>
            <input type="text" id="etternavn"/>
            <label htmlFor="allergier">Allergier: <em>(må fylles ut)</em></label>
            <input type="text" id="allergier"/>
            <fieldset>
              <span>Send epost: </span>
              <div>
                <input type="radio" name="radio" id="ja" value="ja"/>
                <label htmlFor="ja">Ja</label>
              </div>
              <div>
                <input type="radio" name="radio" id="Nei" value="Nei"/>
                <label htmlFor="Nei">Nei</label>
              </div>
            </fieldset>
            <textarea placeholder="kommentarfelt" />
            <button type="button" onMouseDown={this.sendForm} className="actionbutton">Send</button>
          </form>
          <div className="page_skjema__innsendt">
            {innsendt}
          </div>
        </div>
        <h3>Fasit</h3>
      </div>
    );
  }
}

export default Skjema;
