import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Home';

import TastaturnavigasjonWrapper from './Tastaturnavigasjon/Tastaturnavigasjon-wrapper';
import Tastaturnavigasjon from './Tastaturnavigasjon/Tastaturnavigasjon';
import Fokusmarkor from './Tastaturnavigasjon/Fokusmarkor';
import Tastaturfelle from './Tastaturnavigasjon/Tastaturfelle';
import DekkendeLag from './Tastaturnavigasjon/DekkendeLag';
import DekkendeLagOppg from './Tastaturnavigasjon/DekkendeLagOppg';
import TastaturnavigasjonOppg from './Tastaturnavigasjon/TastaturnavigasjonOppg';

import AxeWrapper from './axe/axe-wrapper.js';
import Axe from './axe/axe.js';
import TommeElementer from './axe/tomme-elementer.js';
import Kontrast from './axe/kontrast.js';
import AltTekst from './axe/alt-tekst.js';
import Ledetekster from './axe/Ledetekster';
import Gruppering from './axe/Gruppering';

import SkjermleserWrapper from './Skjermleser/Skjermleser-wrapper.js';
import Skjermleser from './Skjermleser/Skjermleser.js';
import Lister from './Skjermleser/Lister.js';
import ListerOppg from './Skjermleser/ListerOppg.js';
import Overskrifter from './Skjermleser/Overskrifter.js';
import OverskrifterOppg from './Skjermleser/OverskrifterOppg.js';
import Hjelpetekster from './Skjermleser/Hjelpetekster.js';
import HjelpeteksterOppg from './Skjermleser/HjelpeteksterOppg.js';
import Skjermleserfelle from './Skjermleser/Skjermleserfelle.js';

import './index.css';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App} onChange={(prevState, nextState) => {
      if (nextState.location.action !== "POP") {
        window.scrollTo(0, 0);
        document.activeElement.blur();
      }
    }}>
      <IndexRoute component={Home} />
      
      <Route path="/axe" component={AxeWrapper}>
        <IndexRoute component={Axe} />
        <Route path="/axe/tomme-elementer" component={TommeElementer} name="tommeElementer" />
        <Route path="/axe/kontrast" component={Kontrast} name="kontrast" />
        <Route path="/axe/alt-tekst" component={AltTekst} name="alt tekst" />
        <Route path="/axe/ledetekster" component={Ledetekster} name="Ledetekster" />
        <Route path="/axe/gruppering" name="Gruppering" component={Gruppering} />
      </Route>

      <Route path="/tastaturnavigasjon" component={TastaturnavigasjonWrapper}>
        <IndexRoute component={Tastaturnavigasjon} />
        <Route path="/tastaturnavigasjon/fokusmarkor" component={Fokusmarkor} name="Fokusmarkør" />
        <Route path="/tastaturnavigasjon/tastaturfelle" component={Tastaturfelle} name="Tastaturfelle"/>
        <Route path="/tastaturnavigasjon/modalvindu" component={DekkendeLag} name="Dekkende lag"/>
        <Route path="/tastaturnavigasjon/modalvindu-oppgave" component={DekkendeLagOppg} name="Dekkende lag oppgave"/>
        <Route path="/tastaturnavigasjon/tastaturnavigasjon-oppgave" component={TastaturnavigasjonOppg} name="Tastaturnavigasjon oppgave"/>
      </Route>

      <Route path="/skjermleser" component={SkjermleserWrapper}>
        <IndexRoute component={Skjermleser} />
        <Route path="/skjermleser/lister" component={Lister} name="Lister" />
        <Route path="/skjermleser/lister-oppgave" component={ListerOppg} name="Lister" />
        <Route path="/skjermleser/overskrifter" component={Overskrifter} name="Overskrifter" />
        <Route path="/skjermleser/overskrifter-oppgave" component={OverskrifterOppg} name="Overskrifter" />
        <Route path="/skjermleser/hjelpetekster" component={Hjelpetekster} name="Hjelpetekster" />
        <Route path="/skjermleser/hjelpetekster-oppgave" component={HjelpeteksterOppg} name="Hjelpetekster" />
        <Route path="/skjermleser/skjermleserfelle" component={Skjermleserfelle} name="Skjermleserfelle" />
      </Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
