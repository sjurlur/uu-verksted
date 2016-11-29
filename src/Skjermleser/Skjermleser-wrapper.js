import React, { Component } from 'react';
import Progress from '../Progress/Progress';
import './skjermleser.css';

class SkjermleserWrapper extends Component {
  render() {
    return (
      <div>
        <div className="layout-container main page_skjermleser">
          <h1>Skjermleser</h1>
          {this.props.children}
        </div>
        <Progress index={this.props.route} elements={this.props.routes[this.props.routes.length - 2].childRoutes} current={this.props.location.pathname}/>
      </div>
    );
  }
}

export default SkjermleserWrapper;