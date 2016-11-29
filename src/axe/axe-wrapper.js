import React, { Component } from 'react';
import Progress from '../Progress/Progress';
import './axe.css';
class axeWrapper extends Component {
  render() {
    return (
      <div>
        <div className="layout-container main page_axe">
          <h1>aXe</h1>
          {this.props.children}
        </div>
        <Progress index={this.props.route} elements={this.props.routes[this.props.routes.length - 2].childRoutes} current={this.props.location.pathname}/>
      </div>
    );
  }
}

export default axeWrapper;