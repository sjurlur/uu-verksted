import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Home';

import Skjema from './Skjema/Skjema';
import Ledetekster from './Skjema/Ledetekster';
import Gruppering from './Skjema/Gruppering';
import Pakrevd from './Skjema/Pakrevd';

import TastaturnavigasjonWrapper from './Tastaturnavigasjon/Tastaturnavigasjon-wrapper';
import Tastaturnavigasjon from './Tastaturnavigasjon/Tastaturnavigasjon';
import Fokusmarkor from './Tastaturnavigasjon/Fokusmarkor';
import Tastaturfelle from './Tastaturnavigasjon/Tastaturfelle';
import TastaturfelleOppg from './Tastaturnavigasjon/TastaturfelleOppg';
import DekkendeLag from './Tastaturnavigasjon/DekkendeLag';
import DekkendeLagOppg from './Tastaturnavigasjon/DekkendeLagOppg';

import './index.css';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/skjema" component={Skjema}>
        <Route path="/skjema/1" component={Ledetekster} />
        <Route path="/skjema/3" component={Gruppering} />
        <Route path="/skjema/5" component={Pakrevd} />
      </Route>
      <Route path="/tastaturnavigasjon" component={TastaturnavigasjonWrapper}>
        <IndexRoute component={Tastaturnavigasjon} />
        <Route path="/1" component={Fokusmarkor} name="Fokusmarkør" />
        <Route path="/2" component={Tastaturfelle} />
        <Route path="/3" component={TastaturfelleOppg} />
        <Route path="/4" component={DekkendeLag} />
        <Route path="/5" component={DekkendeLagOppg} />
      </Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
