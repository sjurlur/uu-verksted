import React, { Component } from 'react';

class OverskrifterOppg extends Component {
  render() {
    return (
      <div>
        <h2>Overskrifter</h2>
        <p>Undersøk siden med skjermleser. Er det samsvar mellom utseende og koding? Følger overskriftene en logisk struktur?</p>
        <div className="mol_emphasisbox grey">
          <div className="page_skjermelser__h2">Gode råd for bedre søvn</div>
          <p>De aller fleste av oss har problemer med å sove innimellom. Dette er helt normalt. Gode søvnvaner fremmer bedre søvn og forebygger framtidige søvnproblemer.</p>
          <h1 className="h3">Følg klokka</h1>
          <p>
            Søvnen fungerer best når vi legger oss og står opp til omtrent samme tid hver dag. Søvnen følger en døgnrytme som styres av en biologisk klokke i hjernen. Den biologiske klokka styrer mange prosesser i kroppen i tillegg til søvn og våkenhet, blant annet kroppstemperatur og fordøyelse.
          </p>
          <b className="page_skjermelser__boldheading">Gode råd for å følge klokka</b>
          <p>
            Et godt råd for å holde en jevn og god døgnrytme er å stå opp et fast tidspunkt hver dag og ikke sove mer enn ca. en time ekstra på fridager. Sørg også for å være ute i dagslys i løpet av dagen. Lys er med på å regulere døgnrytmen og utskillelse av kroppens søvnhormon, melatonin.
          </p>
        </div>
      </div>
    );
  }
}

export default OverskrifterOppg;
