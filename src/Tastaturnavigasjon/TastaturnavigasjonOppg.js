import React, { Component } from 'react';
import './Tastaturnavigasjon.css';
import classNames from 'classnames';
import Collapse from 'react-collapse';

class TastaturnavigasjonOppg extends Component {
  constructor(props) {
    super(props);
    this.toggleOpen = this.toggleOpen.bind(this);
    this.toggleFasit = this.toggleFasit.bind(this);
    this.state = { open: false, fasit: false };
  }

  toggleOpen() {
    const open = !this.state.open;
    this.setState({ open });
  }

  toggleFasit() {
    const fasit = !this.state.fasit;
    this.setState({ fasit });
  }

  render() {
    const expanderClasses = classNames({visuallyhidden: !this.state.open});
    const fasitButtonClasses = classNames('atom_inline-navigationbutton', 'arrow-after', {
      'arrow-up': this.state.fasit,
      'arrow-down': !this.state.fasit,
    });
    const expanderButtonClasses = classNames('atom_inline-navigationbutton', 'arrow-after', {
      'arrow-up': this.state.open,
      'arrow-down': !this.state.open,
    });
    return (
      <div>
       <h2>Oppgave</h2>
        <div className="mol_emphasisbox grey">
        <ul className="unstyled">
          <li className="mol_expandable-block protojs-expandable margin-below open" aria-expanded="true" tabIndex="0">
            <div className="head protojs-expander">
              <div className="mol_expandableblock-head brukavhelsetjenester">
                <div className="flexitem main">
                  <h3 className="componentheading emphasized">Dialogtjenester og personlig helsearkiv</h3>
                  <span className="status check">Samtykket</span>
                  <p>Via disse tjenestene kan du kommunisere digitalt med stadig flere behandlere og lagre informasjon i det personlige helsearkivet ditt.</p>
                  <button type="button" className={expanderButtonClasses} aria-expanded={this.state.open} onClick={this.toggleOpen}>Endre innstillinger</button>
                </div>
              </div>
            </div>
            <div className={expanderClasses}>
              <div className="container protojs-container protojss-container" aria-hidden="false">
                <div>
                  <div className="mol_expandableblock-container">
                    <p>22.11.2016 samtykket du til bruk av digitale dialogtjenester og personlig helsearkiv.</p>
                    <div className="mol_emphasisbox">
                      <h3 className="h4">Du kan trekke tilbake ditt samtykke</h3>
                      <div>
                        <p>Hvis du trekker samtykket, kan du ikke lenger bruke disse tjenestene. I tilfelle du skulle ombestemme deg, ligger informasjonen lagret i 30 dager. Etter dette slettes opplysningene for godt.</p><p>Alt innhold i ditt personlige helsearkiv vil bli slettet, også det du har lastet opp selv. Vil du beholde noe av dette, må du kopiere innholdet før du trekker samtykket. Informasjonen fra behandler vil fortsatt være lagret i deres systemer.</p>
                      </div>
                      <div className="mol_emphasisbox grey">
                        <div>
                          <input type="checkbox" id="Samtykke_1" value="on" />
                          <label htmlFor="Samtykke_1" className="">Jeg har forstått hva det betyr for meg å trekke tilbake samtykket</label>
                        </div>
                        <div className="actions">
                          <button className="actionbutton" disabled="" type="button">
                            <span className="">Jeg trekker samtykket</span>
                          </button>
                          <button className="cancelbutton page_tastaturnavigasjon__cancelbutton" type="button">
                            <span className="">Avbryt</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
          <p>
            <a>Innhold levert av: Norwegian Institute of Public Health</a>
          </p>
        </div>
        <section className="page_tastaturnavigasjon__fasit">
          <button type="button" className={fasitButtonClasses} aria-expanded={this.state.fasit} onClick={this.toggleFasit}>{!this.state.fasit ? 'Vis fasit' : 'Skjul fasit'}</button>
          <Collapse isOpened={this.state.fasit}>
            <ul>
              <li>Blokken kan få fokus, men det skjer ingenting ved klikk</li>
              <li>Innhold bak expander er ikke skjult for Tastaturnavigasjon</li>
              <li>Avbryt-knappen mangler fokusmarkør</li>
              <li>Linken mangler fokusmarkør. Det skjer fordi den mangler href-attributt</li>
            </ul>
          </Collapse>
        </section>
      </div>
    );
  }
}

export default TastaturnavigasjonOppg;