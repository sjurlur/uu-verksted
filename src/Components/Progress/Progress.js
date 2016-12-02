import React, { Component } from 'react';
import { Link } from 'react-router';
import './progress.css'

class Progress extends Component {
  render() {
    const { elements, current, index } = this.props;
    const totalSteps = elements.length;
    let thisStep = -1;
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].path === current) {
        thisStep = i;
      }
    }

    let prevLink;
    if (thisStep > 0) {
      prevLink = (<Link to={elements[thisStep - 1].path}>Forrige</Link>);
    }
    else if (thisStep === 0) {
      prevLink = (<Link to={index.path}>Forrige</Link>);
    }
    else {
      prevLink = null;
    }

    let nextLink;
    if (thisStep === -1) {
      nextLink = (<Link to={elements[thisStep + 1].path}>Neste</Link>);
    }
    else if (thisStep < elements.length - 1) {
      nextLink = (<Link to={elements[thisStep + 1].path}>Neste</Link>);
    }
    else {
      nextLink = (<Link to="/">Ferdig</Link>);
    }
    
    return (
      <footer className="footer layout-container">
        <div className="footer__wrapper">
          <div className="footer__linkwrap footer__linkwrap--next">{nextLink}</div>
          <div className="footer__progress">
            <div className="footer__progressbar" aria-hidden="true">
              <span style={{width: (thisStep + 1) / (totalSteps) * 100 + '%'}}>
              </span>
            </div>
            <div>
              <span className="visuallyhidden">Du står på steg </span>{thisStep + 1} <span aria-hidden="true">/</span><span className="visuallyhidden"> av </span> {totalSteps}
            </div>
          </div>
          <div className="footer__linkwrap footer__linkwrap--prev">{prevLink}</div>
        </div>
      </footer>
    );
  }
}

export default Progress;