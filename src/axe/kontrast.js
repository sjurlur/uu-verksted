import React, { Component } from 'react';

class kontrast extends Component {
  render() {
    return (
      <div>
        <h2>Kontrast</h2>
        <p>Kontrastforholdet mellom tekst og bakgrunn skal være 4,5:1 for liten teskt og 3:1 for stor tekst.</p>
        <h3>Oppgave</h3>
        <p>Kjør aXe på denne siden og finn tekst med for dårlig kontrastforhold</p>
        <div className="mol_emphasisbox transparent">
          <button className="atom_inline-navigationbutton arrow-after arrow-down">Les mer</button>
          <button className="atom_inline-navigationbutton arrow-after arrow-down page_axe__kontrastlg">Les mer</button>
          <br/>
          <div style={{background: '#e38b21', color: '#fff', 'font-size': '1.875rem'}}>Hjelp</div>
        </div>
      </div>
    );
  }
}

export default kontrast;
