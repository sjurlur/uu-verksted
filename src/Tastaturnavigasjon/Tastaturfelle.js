import React, { Component } from 'react';
import focusTrap from 'focus-trap';

class Tastaturfelle extends Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
    this.expand = this.expand.bind(this);
    this.deactivateTrap = this.deactivateTrap.bind(this);
  }

  expand() {
    this.setState({ expanded: !this.state.expanded });
    setTimeout(() => {
      console.log(this.refs.expander);
          const trap = focusTrap(this.refs.expander);
          this.setState({trap});
          trap.activate();
    }, 100);
  }

  deactivateTrap() {
    this.state.trap.deactivate();
  }

  render() {
    const expander = !this.state.expanded ? null : (
      <div className="expander" ref="expander">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ipsum eos non, sunt odit quia, molestiae minima consequatur eaque pariatur, aut repudiandae dolorem eveniet dolore. Repellendus beatae voluptatem, quis culpa.
        </p>
        <ul>
          <li><a href="#">Link1</a></li>
          <li><a href="#">Link2</a></li>
          <li><a href="#">Link3</a></li>
        </ul>
        <button className="atom_secondarybutton" onClick={this.deactivateTrap}>Ferdig</button>
      </div>
      );

    return (
      <div>
        <h2>Logisk rekkefølge og tastaturfeller</h2>
        <p>
          Ved tastaturnavigasjon skal fokus komme i en logisk rekkefølge. Dette er som oftest leseretningen. Det er også viktig 
          at bruker ikke havner i en tastaturfelle hvor man blir sittende fast i ett element eller en gruppe elementer.
        </p>
        <h3>Oppgave</h3>
        <p>Finn én feil. Trykk på knappen "ferdig" for å kunne gå til neste side</p>
        <div className="mol_emphasisbox grey">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nihil quis, aut possimus voluptatum ratione reprehenderit, corporis, minus repellat facere nobis blanditiis temporibus aperiam. Sit, praesentium? In harum numquam dolorem.
          </p>
          <button className="atom_inline-navigationbutton arrow-after arrow-down" onClick={this.expand}>Les mer om lorem ipsum</button>
          {expander}
        </div>
      </div>
    );
  }
}

export default Tastaturfelle;