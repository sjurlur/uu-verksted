import React, { Component } from 'react';

class HjelpeteksterOppg extends Component {
  render() {
    return (
      <div>
        <h2>Skjulte tekster</h2>
        <p>
          Undersøk siden med skjermleser. Hvilke elementer burde ha skjulte tekster?
        </p>
        <div className="mol_emphasisbox grey">
          <button className="atom_inline-btn close labelinvisible"></button>

          <section className="org_message-group jsp-expand jss-initial jss-expand jss-collapsed">
            <button className="org_message-header jsp-expander jss-expander jss-link" aria-expanded="false" aria-controls="thread-a8b208b5-60cb-4cbe-a4bc-7029855f5aa3" type="button">
              <div className="org_message-header__inner-container">
                <span className="position-left small atom_avatar " aria-hidden="true"></span>
                <div className="timestamp">
                  <span className="date">ons.</span><span className="time">kl. 14:01</span></div><div className="service"></div>
                  <h1 className="subject">Fullmakt opprettet</h1>
                  <div className="participants">
                    <span>Helsenorge.no, Deg</span>
                    <span className="all-messages">(1)</span>
                </div>
              </div>
            </button>
            <div className="jsp-expandable jsp-messages org_message-group-content jss-expandable" role="region" aria-hidden="true" id="thread-a8b208b5-60cb-4cbe-a4bc-7029855f5aa3">
              <section className="has-message-margins"></section>
            </div>
          </section>
        </div>

        <h3>Bonusoppgave</h3>
        <p>Finn de skjulte tekstene i footeren på siden</p>
      </div>
    );
  }
}

export default HjelpeteksterOppg;
