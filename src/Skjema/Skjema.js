import React, { Component } from 'react';
import Progress from '../Progress/Progress';
import './Skjema.css';

class Skjema extends Component {
  render() {
    return (
      <div>
        <h1>Skjema</h1>
        <Progress elements={this.props.routes[this.props.routes.length - 2].childRoutes}/>
        <a href="https://uu.difi.no/artikkel/2015/07/skjema">Difis artikkel om skjema</a>
        <div className="page_skjema">
         {this.props.children}
        </div>
      </div>
    );
  }
}

export default Skjema;
