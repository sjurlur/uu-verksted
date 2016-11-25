import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Home';
import Skjema from './Skjema/Skjema';
import Tastaturnavigasjon from './Tastaturnavigasjon/Tastaturnavigasjon';
import './index.css';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/1" component={Skjema} />
      <Route path="/2" component={Tastaturnavigasjon} />
    </Route>
  </Router>,
  document.getElementById('root')
);
