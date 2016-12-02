import React, { Component } from 'react';
import Expander from '../../Components/Expander/Expander';

class Hjelpetekster extends Component {
  render() {
    return (
      <div>
        <h2>Skjulte tekster</h2>
        <p>
          Stort sett bør tekster vises for alle brukere. Men i noen få tilfeller skjuler vi tekst visuelt, men viser den for 
          skjemlesere. På helsenorge gjelder dette blant annet de skjulte linkene "hopp til innholdet" og "hopp til hovedmeny".
          I noen tilfeller bruker vi også knapper med ikoner i stedet for tekst.
        </p>
        <h3>Eksempel</h3>
        <p>Bruk skjermleser til å finne de skjulte tekstene i boksen under. Det finnes fem totalt.</p>
        <div className="mol_emphasisbox grey">
          <button className="atom_inline-btn close labelinvisible"><span>Lukk</span></button>

          <section className="org_message-group jsp-expand jss-initial jss-expand jss-collapsed">
            <button className="org_message-header jsp-expander jss-expander jss-link" aria-expanded="false" aria-controls="thread-a8b208b5-60cb-4cbe-a4bc-7029855f5aa3" type="button">
              <div className="org_message-header__inner-container">
                <span className="position-left small atom_avatar " aria-hidden="true"></span>
                <div className="timestamp">
                  <span className="visuallyhidden">Mottatt: </span><span className="date">ons.</span><span className="time">kl. 14:01</span></div><div className="service"></div>
                  <h1 className="subject">Fullmakt opprettet</h1>
                  <div className="participants">
                    <span><span className="visuallyhidden">Fra: </span>Helsenorge.no, <span className="visuallyhidden">Til: </span>Deg</span>
                    <span className="all-messages">                      <span className="visuallyhidden">
                        antall meldinger: 
                      </span>(1)
                    </span>
                </div>
              </div>
            </button>
            <div className="jsp-expandable jsp-messages org_message-group-content jss-expandable" role="region" aria-hidden="true" id="thread-a8b208b5-60cb-4cbe-a4bc-7029855f5aa3">
              <section className="has-message-margins"></section>
            </div>
          </section>
        </div>
        <br/>
        <Expander text="Vis fasit">
          <ul>
            <li>Lukkeknappen har skjult tekst "lukk"</li>
            <li>Datostemplingen har skjult tekst "Mottatt:"</li>
            <li>Før helsenorge.no er det skjult tekst "Fra:"</li>
            <li>Før deg er det skjult tekst "Til:"</li>
            <li>Før (1) er det skjult tekst "antall meldinger:"</li>
          </ul>
        </Expander>
      </div>
    );
  }
}

export default Hjelpetekster;
