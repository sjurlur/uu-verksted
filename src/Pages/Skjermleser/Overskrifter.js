import React, { Component } from 'react';

class Overskrifter extends Component {
  render() {
    return (
      <div>
        <h2>Headings</h2>
        <p>What looks like a heading should be coded as a heading. Headings may not skip levels. Thus 
        you cannot go directly from level 1 to level 3</p>
        <h3>Exercise</h3>
        <p>
          On which level are the headings on this page?
        </p>
        <div className="mol_emphasisbox grey">
          <h2>MOBY DICK; or, THE WHALE.</h2>
          <h3>CHAPTER 1. Loomings.</h3>
          <p>Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world</p>
          <h4>CHAPTER 1.1</h4>
          <p>But look! here come more crowds, pacing straight for the water, and seemingly bound for a dive. Strange!</p>
          <h5>CHAPTER 1.1.1</h5>
          <p>Now, when I say that I am in the habit of going to sea whenever I begin to grow hazy about the eyes, and begin to be over conscious of my lungs, I do not mean to have it inferred that I ever go to sea as a passenger. </p>
          <h3>CHAPTER 2. The Carpet-Bag.</h3>
          <p>I stuffed a shirt or two into my old carpet-bag, tucked it under my arm, and started for Cape Horn and the Pacific.</p>
        </div>
      </div>
    );
  }
}

export default Overskrifter;
