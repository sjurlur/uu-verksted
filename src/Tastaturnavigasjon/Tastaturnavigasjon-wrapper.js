import React, { Component } from 'react';
import Progress from '../Progress/Progress';
import './Tastaturnavigasjon.css';

class TastaturnavigasjonWrapper extends Component {
  render() {
    return (
      <div>
        <h1>Tastaturnavigasjon</h1>
        <Progress elements={this.props.routes[this.props.routes.length - 2].childRoutes}/>
        {this.props.children}
      </div>
    );
  }
}

export default TastaturnavigasjonWrapper;