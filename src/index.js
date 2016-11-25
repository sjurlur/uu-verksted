import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Home';
import Lesson1 from './Lesson1';
import './index.css';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/1" component={Lesson1} />
    </Route>
  </Router>,
  document.getElementById('root')
);
