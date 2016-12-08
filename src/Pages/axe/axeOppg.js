import React, { Component } from 'react';
import dog from './dog.png'
import Expander from '../../Components/Expander/Expander';

class axeOppg extends Component {
  render() {
    return (
      <div>
        <h2>Oppgave</h2>
        <p>Finn alle feilene på denne siden ved hjelp av aXe. Er alle feil reelle?</p>
        <div className="mol_emphasisbox">
          <div className="page_axe__absolutecontainer">
            <div className="page_axe__absolutebackground">
            </div>
            <div className="page_axe__text">
              Dette er en tekst som beskriver dette skjemaet
            </div>
          </div>
          <form>
            <label htmlFor="1">Navn:</label>
            <input type="text" placeholder="text" id="1" />
            <label htmlFor="1">Valgkrets:</label>
            <input type="text" placeholder="text" id="1" /><br />
            <button className="atom_inline-btn send"></button>
            <button className="atom_inline-btn close"></button><span className="page_axe__closetext">Lukk</span><br />
          </form>
          <p>Her er en side med:</p>
          <a href="http://www.doggifpage.com/"><img src={dog} height="200"/></a>
        </div>
        <br />
        <Expander text="Vis fasit">
          <ul>
            <li>aXe rapporterer kontrastfeil på hvit tekst på svart bakgrunn. Det stemmer ikke.</li>
            <li>Begge input feltene er koblet til samme label.</li>
            <li>Papirflyknappen har ingen tekst</li>
            <li>Lukkeknappen har ingen tekst (teksten "lukk" er ikke knyttet til elementet)</li>
            <li>Bildet mangler alt-tekst</li>
            <li>Bildet er en link, men mangler linktekst. Teksten er skrevet i bildet.</li>
          </ul>
        </Expander>

        <h3>Ressurser</h3>
        <ul>
          <li><a href="https://uu.difi.no/artikkel/2015/04/bilder-og-grafikk">Difis artikkel om alt-tekster</a></li>
          <li><a href="http://webaim.org/techniques/alttext">webAIMs artikkel om alt-tekster</a></li>
        </ul>
      </div>
    );
  }
}

export default axeOppg;
