import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Home';

import TastaturnavigasjonWrapper from './Pages/Tastaturnavigasjon/Tastaturnavigasjon-wrapper';
import Tastaturnavigasjon from './Pages/Tastaturnavigasjon/Tastaturnavigasjon';
import Fokusmarkor from './Pages/Tastaturnavigasjon/Fokusmarkor';
import Tastaturfelle from './Pages/Tastaturnavigasjon/Tastaturfelle';
import DekkendeLag from './Pages/Tastaturnavigasjon/DekkendeLag';
import DekkendeLagOppg from './Pages/Tastaturnavigasjon/DekkendeLagOppg';
import TastaturnavigasjonOppg from './Pages/Tastaturnavigasjon/TastaturnavigasjonOppg';

import AxeWrapper from './Pages/axe/axe-wrapper.js';
import Axe from './Pages/axe/axe.js';
import TommeElementer from './Pages/axe/tomme-elementer.js';
import Kontrast from './Pages/axe/kontrast.js';
import AltTekst from './Pages/axe/alt-tekst.js';
import Ledetekster from './Pages/axe/Ledetekster';
import Gruppering from './Pages/axe/Gruppering';

import SkjermleserWrapper from './Pages/Skjermleser/Skjermleser-wrapper.js';
import Skjermleser from './Pages/Skjermleser/Skjermleser.js';
import Lister from './Pages/Skjermleser/Lister.js';
import ListerOppg from './Pages/Skjermleser/ListerOppg.js';
import Overskrifter from './Pages/Skjermleser/Overskrifter.js';
import OverskrifterOppg from './Pages/Skjermleser/OverskrifterOppg.js';
import Hjelpetekster from './Pages/Skjermleser/Hjelpetekster.js';
import HjelpeteksterOppg from './Pages/Skjermleser/HjelpeteksterOppg.js';
import Skjermleserfelle from './Pages/Skjermleser/Skjermleserfelle.js';

import './index.css';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App} onChange={(prevState, nextState) => {
      if (nextState.location.action !== "POP") {
        window.scrollTo(0, 0);
        document.activeElement.blur();
        setTimeout(() => {
          console.log(document.getElementsByTagName('h1')[0].focus());
        }, 100)
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
