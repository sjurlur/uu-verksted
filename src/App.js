import React, { Component } from 'react';
import './App.css';
import { IndexLink } from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
        <header className="pageheader layout-container">
          <IndexLink to="/" activeClassName="index-link--active">&#8592; Forsiden</IndexLink>
        </header>
       {this.props.children}
      </div>
    );
  }
}

export default App;
