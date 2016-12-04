import React, { Component } from 'react';
import './Skjema.css';
import Collapse from 'react-collapse';
import classNames from 'classnames';

class Skjema extends Component {
  constructor(props) {
    super(props);
    this.sendForm = this.sendForm.bind(this);
    this.toggleExpand = this.toggleExpand.bind(this);
    this.state = {sent: false, expanded: false}
  }
  sendForm(evt) {
    console.log(evt);
    this.setState({ sent: true });
    setTimeout(() => {
      this.setState({ sent: false });
    }, 2000);
  }
  toggleExpand() {
    const expanded = !this.state.expanded;
    this.setState({expanded});
  }
  render() {
    const buttonClasses = classNames('atom_inline-navigationbutton', 'arrow-after', {
      'arrow-up': this.state.expanded,
      'arrow-down': !this.state.expanded,
    });
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
            <div className="page_skjema__fieldset">
              <legend>Send epost: </legend>
              <div>
                <input type="radio" name="radio" id="ja" value="ja"/>
                <label htmlFor="ja">Ja</label>
              </div>
              <div>
                <input type="radio" name="radio" id="Nei" value="Nei"/>
                <label htmlFor="Nei">Nei</label>
              </div>
            </div>
            <textarea placeholder="kommentarfelt" />
            <button type="button" onMouseDown={this.sendForm} className="actionbutton">Send</button>
          </form>
          <div className="page_skjema__innsendt">
            {innsendt}
          </div>
        </div>
        <section className="page_skjema__fasit">
          <button type="button" className={buttonClasses} aria-expanded={this.state.expanded} onClick={this.toggleExpand}>{!this.state.expanded ? 'Vis fasit' : 'Skjul fasit'}</button>
          <Collapse isOpened={this.state.expanded}>
            <ul>
              <li>Etikett til etternavn er kodet som <code>&lt;span&gt;</code> i stedet for <code>&lt;label&gt;</code></li>
              <li>Påkrevd felt allergier mangler attributten <em>required</em></li>
              <li>Radioknapper er ikke gruppert med <code>&lt;fieldset&gt;</code></li>
              <li>Kommentarfelt mangler etikett</li>
              <li>Det er bare mulig å klikke på send knappen med musen</li>
            </ul>
          </Collapse>
        </section>
      </div>
    );
  }
}

export default Skjema;
