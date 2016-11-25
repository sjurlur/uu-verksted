import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <article className="layout-container">
       {this.props.children}
      </article>
    );
  }
}

export default App;
