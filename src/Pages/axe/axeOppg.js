import React, { Component } from 'react';
import dog from './dog.png'
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
              en tekst med god kontrast
            </div>
          </div>
          <form>
            <label htmlFor="1">Navn:</label>
            <input type="text" placeholder="text" id="1" />
            <label htmlFor="1">Valgkrets:</label>
            <input type="text" placeholder="text" id="1" /><br />
            <button className="atom_inline-btn send"></button>
            <button className="atom_inline-btn close"></button><br />
            <a href="http://www.doggifpage.com/"><img src={dog} height="200"/></a>
          </form>
        </div>
      </div>
    );
  }
}

export default axeOppg;
