import React, { Component } from 'react';
import focusTrap from 'focus-trap';
import './TastaturfelleOppg.css';
class TastaturfelleOppg extends Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
    this.expand = this.expand.bind(this);
  }

  expand() {
    this.setState({ expanded: !this.state.expanded });
    setTimeout(() => {
      console.log(this.refs.expander);
          const trap = focusTrap(this.refs.expander);
          trap.activate();
    }, 100);
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
      </div>
      );
    return (
      <div>
        <h2>Finn én feil</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nihil quis, aut possimus voluptatum ratione reprehenderit, corporis, minus repellat facere nobis blanditiis temporibus aperiam. Sit, praesentium? In harum numquam dolorem.
        </p>
        <button className="atom_inline-navigationbutton arrow-after arrow-down" onClick={this.expand}>Les mer om lorem ipsum</button>
        {expander}
      </div>
    );
  }
}

export default TastaturfelleOppg;