import React, { Component } from 'react';
import focusTrap from 'focus-trap';
import classNames from 'classnames';
import Expander from '../../Components/Expander/Expander';

class DekkendeLagOppg extends Component {
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
    const classes = classNames({
      'mol_lightbox': true,
      'visuallyhidden': !this.state.open
    });
    const lightbox = (
      <div className={classes} ref="lightbox">
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
        <p>Bruk tastatur for å navigere. Hva er feil på denne siden?</p>
        <div className="mol_emphasisbox grey">
          <button className="actionbutton" type="button" onClick={this.openLightbox} ref="knapp">Åpne modalvindu</button>
          {lightbox}
          <br />
          <button className="atom_inline-btn message"><span>Send melding til Helse nord</span></button><br/>
          <button className="atom_inline-btn message"><span>Send melding til Helse vest</span></button>
        </div><br />
        <Expander text="Vis fasit">
          <p>
            Det er fire skjulte tab-steg mellom knappen "Åpne modalvindu" og "Send melding til Helse nord".
            De ligger inne i modalvinduet, og skal ikke være tilgjengelige for tastaturnavigasjon når denne er lukket. 
          </p>
        </Expander>
      </div>
    );
  }
}

export default DekkendeLagOppg;