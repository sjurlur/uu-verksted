import React, { Component } from 'react';
import focusTrap from 'focus-trap';

class DekkendeLag extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false, trap: null };
    this.openLightbox = this.openLightbox.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
  }

  openLightbox() {
    this.setState({ open: true });
    setTimeout(() => {
        this.refs.lightboxheading.focus();
        const trap = focusTrap(this.refs.lightbox);
        this.setState({ trap });
        trap.activate();
      }, 100);
  }

  closeLightbox() {
    this.setState({ open: false });
    setTimeout(() => {
        this.state.trap.deactivate();
        this.setState({ trap: null });
        this.refs.knapp.focus();
      }, 100); 
  }

  render() {
    const lightbox = !this.state.open ? null : (
      <div className="mol_lightbox" ref="lightbox">
          <div className="lightbox-content">
              <h3 tabIndex="0" ref="lightboxheading">Lightbox hvor innhold bestemmer bredde</h3>

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, accusamus labore minima, quod consequatur libero, repellat quisquam, facere quae dignissimos iure dicta magnam aspernatur laboriosam saepe nam at sunt quas.</p>

              <div className="mol_actionconfirmationprompt">
                  <button type="button" className="actionbutton">
                      Reserver meg
                  </button><button type="button" className="cancelbutton" onClick={this.closeLightbox}>Avbryt</button>
              </div>
              <button className="closebutton_v2 atom_inline-btn labelinvisible close" onClick={this.closeLightbox}><span>Lukk</span></button>
          </div>
      </div>
      );
    return (
      <div>
        <h2>Expandere og modalvinduer</h2>
        <p>
          Ved åpning av modalvinduer skal fokus settes til begynnelsen av vinduet. Ved lukking skal elementet som åpnet vinduet få fokus igjen
        </p>
        <p>
          En vanlig feil er at innhold i modalvinduer og ekspanderbar visning er skjult visuelt, men ikke for tastaturnavigasjon. 
          Bruker vil da kunne navigere til elementer som er skjult i visningen, og som dermed ikke har noen fokusmarkør. Det blir bare rot. 
        </p>
        <h3>Eksempel</h3>
        <div className="mol_emphasisbox grey">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas itaque doloribus ipsum nobis saepe obcaecati molestiae porro atque, blanditiis ut voluptas nulla, a minima, odio nostrum reprehenderit minus quos. Error.</p>
          <button className="actionbutton" type="button" onClick={this.openLightbox} ref="knapp">Åpne modalvindu</button>
        </div>
        {lightbox}
      </div>
    );
  }
}

export default DekkendeLag;