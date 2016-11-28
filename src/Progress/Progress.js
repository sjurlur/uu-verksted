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
    console.log(elements);
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
    console.log(thisStep);
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
          <div className="footer__linkwrap">{prevLink}</div>
          <div className="footer__progress">
            <progress max="100" value={(thisStep + 1) / (totalSteps) * 100}>
            </progress>
            {thisStep + 1} / {totalSteps}
          </div>
          <div className="footer__linkwrap">{nextLink}</div>
        </div>
      </footer>
    );
  }
}

export default Progress;