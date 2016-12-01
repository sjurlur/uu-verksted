import React, { Component } from 'react';
import brandenburger from './brandenburger.jpg';
import hamburger from './hamburger.jpg';
import slett from './slett.png';

class kontrast extends Component {
  render() {
    return (
      <div>
        <h2>Alt-tekst</h2>
        <p>Bilder trenger alt-tekst for å være tilgjengelige. Rent dekorative bilder, som f.eks en skillelinje skal ha tom alt-tekst. Bilder som formidler ett budskap skal ha en tekst som beskriver 
        bildet</p>
        <p>For mer utfyllende informasjon se <a href="https://uu.difi.no/artikkel/2015/04/bilder-og-grafikk">Difis artikkel om alt-tekster</a> og <a href="http://webaim.org/techniques/alttext">webAIMs artikkel om alt-tekster</a></p>

        <h3>Oppgave</h3>
        <p>
          Analyser siden med aXe. Skal alle bildene ha alt-tekster?
        </p>
        <div className="mol_emphasisbox grey page_axe__images">
          <img src={brandenburger} alt="Brandenburger Tor" />
          <p>En lang tekst om Brandenburger</p>
          <br /><br />
          <img src={hamburger} />
          <p>En lang tekst om hamburger</p>
          <br /><br />
          <img src={slett} className="page_axe__slett" /><button className="atom_inline-navigationbutton">Slett</button>          
        </div>
      </div>
    );
  }
}

export default kontrast;
