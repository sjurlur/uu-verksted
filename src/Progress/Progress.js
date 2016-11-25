import React, { Component } from 'react';

class Progress extends Component {
  render() {
    const elements = this.props.elements.map((el, i) => {
      console.log(el);
      return (<li key={el.path}>{i + 1}</li>)
    }) 
    return (
      <ul>
        {elements}
      </ul>
    );
  }
}

export default Progress;