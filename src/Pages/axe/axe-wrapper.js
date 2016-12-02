import React, { Component } from 'react';
import Progress from '../../Components/Progress/Progress';
import './axe.css';
class axeWrapper extends Component {
  render() {
    return (
      <div>
        <div className="layout-container main page_axe">
          <h1 className="heading--border-bottom" tabIndex="-1">aXe</h1>
          {this.props.children}
        </div>
        <Progress index={this.props.route} elements={this.props.routes[this.props.routes.length - 2].childRoutes} current={this.props.location.pathname}/>
      </div>
    );
  }
}

export default axeWrapper;