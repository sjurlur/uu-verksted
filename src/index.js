import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Home';
import Skjema from './Skjema/Skjema';
import Tastaturnavigasjon from './Tastaturnavigasjon/Tastaturnavigasjon';
import Fokusmarkor from './Tastaturnavigasjon/Fokusmarkor';
import Tastaturfelle from './Tastaturnavigasjon/Tastaturfelle';
import TastaturfelleOppg from './Tastaturnavigasjon/TastaturfelleOppg';
import DekkendeLag from './Tastaturnavigasjon/DekkendeLag';

import './index.css';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/1" component={Skjema} />
      <Route path="/2" component={Tastaturnavigasjon} />
      <Route path="/3" component={Fokusmarkor} />
      <Route path="/4" component={Tastaturfelle} />
      <Route path="/5" component={TastaturfelleOppg} />
      <Route path="/6" component={DekkendeLag} />
    </Route>
  </Router>,
  document.getElementById('root')
);
