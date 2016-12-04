import React, { Component } from 'react';
import Expander from '../../Components/Expander/Expander';
import classNames from 'classnames';

class SkjermleserOppg extends Component {
  constructor(props) {
    super(props);
    this.state = {lightboxOpen: false};
    this.toggleLightbox = this.toggleLightbox.bind(this);
  }

  toggleLightbox() {
    const lightboxOpen = !this.state.lightboxOpen;
    this.setState({lightboxOpen});
  }

  render() {
    const classes = classNames({
      'mol_lightbox': true,
      'visuallyhidden': !this.state.lightboxOpen
    });
    const lightbox = (
      <div className={classes} ref="lightbox">
          <div className="lightbox-content">
              <h3 tabIndex="0" ref="lightboxheading">Dette er ett modalvindu</h3>
              <button className="closebutton_v2 atom_inline-btn labelinvisible close" onClick={this.toggleLightbox}><span>Lukk</span></button>
          </div>
      </div>
      );
    return (
      <div>
        <h2>Oppgave</h2>
        <p>Denne siden inneholder fem feil. Se om du kan finne dem ved bruk av skjermleser.</p>
        <div className="mol_emphasisbox grey">
          Ingredienser i tacokrydder:
          <ul>
            <li>
              Spisskummen<br />
              Salt<br />
              Pepper<br />
              Korianderpulver<br />
              Paprikapulver<br />
              Oregano<br />
              Chilipulver
            </li>
          </ul>
          <div className="atom_messagebox lvl1 error">
            <div className="content">
              <p>
                Det har skjedd en feil
              </p>
              <p>
                Den kan ikke lukkes, men det er en lukkeknapp oppe i høyre hjørne
                <button className="atom_inline-btn close page_skjermleser__closebutton"></button>
              </p>
            </div>
          </div><br />
          {lightbox}
          <button className="actionbutton" onClick={this.toggleLightbox}>Åpne modalvindu</button>
        </div>
        <br />
        <Expander text="Vis fasit">
          <ul>
            <li>Listen har bare ett listeelement</li>
            <li>Overskriften i feilmeldingen er ikke kodet som en overskrift</li>
            <li>Lukkeknapp mangler tekst</li>
            <li>Modalvinduet er ikke skjult for skjermleser når den er lukket</li>
            <li>Skjermleser kan navigere utenfor innholdet i modalvinduet når den er åpen</li>
          </ul>
        </Expander>
      </div>
    );
  }
}

export default SkjermleserOppg;
