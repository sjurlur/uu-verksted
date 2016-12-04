import React, { Component } from 'react';

class Knapper extends Component {
  constructor(props) {
    super(props);
    this.state = {clicked: false}
    this.click = this.click.bind(this);
  }

  click(e) {
    e.preventDefault();
    this.setState({clicked: true}),
    setTimeout(() => {
      this.setState({clicked: false});
    }, 2000)
  }

  render() {
    const clicked = this.state.clicked ? "Klikk registrert" : null;
    return (
      <div>
        <h2>Knapper</h2>
        <p>Hvis det ser ut som en knapp skal det være kodet som en knapp.</p>
        <p>
        Knapper kan trykkes på med enter og space-tasten. Linker kan bare trykkes på med enter.
        En enkel test på om det er kodet som en knapp er derfor ved å trykke space på elementet. 
        Hvis det ser ut som en knapp, skal det være mulig å trykke på det ved å bruke space-tasten</p>
        <h3>Oppgave</h3>
        <p>Finn elementet som ser ut som en knapp, men ikke er kodet som en knapp</p>
        <div className="mol_emphasisbox grey">
          <button className="actionbutton" onClick={this.click}>Lagre</button><br />
          <button className="atom_secondarybutton" onClick={this.click}>Avbryt</button><br />
          <a href="#" className="actionbutton page_tastaturnavigasjon__login-btn" onClick={this.click}>Logg inn</a> <br/><br/>
          {clicked}
        </div>
      </div>
    );
  }
}

export default Knapper;