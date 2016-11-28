import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Home';

import SkjemaWrapper from './Skjema/Skjema-wrapper';
import Skjema from './Skjema/Skjema';
import Ledetekster from './Skjema/Ledetekster';
import LedeteksterOppg from './Skjema/LedeteksterOppg';
import Gruppering from './Skjema/Gruppering';
import GrupperingOppg from './Skjema/GrupperingOppg';
import Pakrevd from './Skjema/Pakrevd';
import SkjemaOppg from './Skjema/SkjemaOppg';

import TastaturnavigasjonWrapper from './Tastaturnavigasjon/Tastaturnavigasjon-wrapper';
import Tastaturnavigasjon from './Tastaturnavigasjon/Tastaturnavigasjon';
import Fokusmarkor from './Tastaturnavigasjon/Fokusmarkor';
import Tastaturfelle from './Tastaturnavigasjon/Tastaturfelle';
import TastaturfelleOppg from './Tastaturnavigasjon/TastaturfelleOppg';
import DekkendeLag from './Tastaturnavigasjon/DekkendeLag';
import DekkendeLagOppg from './Tastaturnavigasjon/DekkendeLagOppg';
import TastaturnavigasjonOppg from './Tastaturnavigasjon/TastaturnavigasjonOppg';

import './index.css';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/skjema" component={SkjemaWrapper}>
        <IndexRoute component={Skjema} />
        <Route path="/skjema/1" name="Ledetekster" component={Ledetekster} />
        <Route path="/skjema/2" name="Ledetekster oppgave" component={LedeteksterOppg} />
        <Route path="/skjema/3" name="Gruppering" component={Gruppering} />
        <Route path="/skjema/4" name="Gruppering oppgave" component={GrupperingOppg} />
        <Route path="/skjema/5" name="Påkrevde felt" component={Pakrevd} />
        <Route path="/skjema/6" name="Oppgave" component={SkjemaOppg} />
      </Route>
      <Route path="/tastaturnavigasjon" component={TastaturnavigasjonWrapper}>
        <IndexRoute component={Tastaturnavigasjon} />
        <Route path="/tastaturnavigasjon/1" component={Fokusmarkor} name="Fokusmarkør" />
        <Route path="/tastaturnavigasjon/2" component={Tastaturfelle} name="Tastaturfelle"/>
        <Route path="/tastaturnavigasjon/3" component={TastaturfelleOppg} name="Tastaturfelle oppgave"/>
        <Route path="/tastaturnavigasjon/4" component={DekkendeLag} name="Dekkende lag"/>
        <Route path="/tastaturnavigasjon/5" component={DekkendeLagOppg} name="Dekkende lag oppgave"/>
        <Route path="/tastaturnavigasjon/6" component={TastaturnavigasjonOppg} name="Tastaturnavigasjon oppgave"/>
      </Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
