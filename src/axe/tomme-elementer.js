import React, { Component } from 'react';
import axeImg from './axe.png';
class tommeElementer extends Component {
  render() {
    return (
      <div>
        <h2>Tomme overskrifter</h2>
        <p>Overskriftselementer skal ikke være tomme. Skjermlesere vil lese opp tomme overskrifter, noe som er forvirrende for brukeren </p>
        <h3>Oppgave</h3>
        <p>Høyreklikk på siden, velg inspiser, velg aXe i menylinjen. Trykk så analyze</p>
        <p>Finn de tomme overskriftselementene på siden. Hvor ligger de?</p>
        <img className="page_axe__illustration" src={axeImg} alt="" />
        <h3></h3>
        <h2></h2>
      </div>
    );
  }
}

export default tommeElementer;
