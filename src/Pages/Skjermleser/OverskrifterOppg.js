import React, { Component } from 'react';
import Expander from '../../Components/Expander/Expander';

class OverskrifterOppg extends Component {
  render() {
    return (
      <div>
        <h2>Headings</h2>
        <p></p>
        <div className="mol_emphasisbox grey">
          <div className="page_skjermelser__h2">MOBY DICK; or, THE WHALE.</div>
          <h1 className="h3">CHAPTER 1. Loomings.</h1>
          <p>Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world</p>

          <b className="page_skjermelser__boldheading">CHAPTER 1.1</b>
          <p>But look! here come more crowds, pacing straight for the water, and seemingly bound for a dive. Strange!</p>

        </div>
        <br/>
        <Expander text="Show answers">
          <ul>
            <li>The heading "MOBY DICK; or, THE WHALE." is not coded as a heading</li>
            <li>The heading "CHAPTER 1. Loomings." is coded as heading level 1. Should be level 3</li>
            <li>The heading "CHAPTER 1.1" is not coded as a heading</li>
          </ul>
        </Expander>
      </div>
    );
  }
}

export default OverskrifterOppg;