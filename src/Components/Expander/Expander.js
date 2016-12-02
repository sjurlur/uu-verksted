import React, { Component } from 'react';
import Collapse from 'react-collapse';
import classNames from 'classnames';

class Expander extends Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
    this.toggleExpand = this.toggleExpand.bind(this);
  }

  toggleExpand() {
    const expanded = !this.state.expanded;
    this.setState({ expanded });
  }

  render() { 
    const buttonClasses = classNames('atom_inline-navigationbutton arrow-after', {
      'arrow-up': this.state.expanded,
      'arrow-down': !this.state.expanded,
    });
    return (
      <div>
        <button className={buttonClasses} aria-expanded={this.state.expanded} onClick={this.toggleExpand}>{this.props.text}</button>
        <Collapse isOpened={this.state.expanded}>
          {this.props.children}
        </Collapse>
      </div>
    );
  }
}

export default Expander;