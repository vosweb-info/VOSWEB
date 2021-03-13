<template>
  <div>
    <h2>Hosting</h2>
    <p>
      Wir bringen Sie und Ihr Unternehmen ins Internet: Von der
      Domainregistration bis zum fertigen Internetauftritt im individuellen
      Design, angepasst an Ihre Corporate Identity. Unsere Webhosting-Pakete
      basieren auf erprobter und ausfallsicherer Technologie. USV,
      Klimatisierung, Firewall und redundante Internetanbindung sind für uns
      dabei selbstverständlich. Ihr Paket verwalten Sie bequem über unser
      selbsterklärendes
      <a
        href="https://demo.vosweb.de:2083/login/?user=democpanel&pass=2018Voswebdemo&locale=de"
        target="_blank"
      >
        Webinterface
      </a>
    </p>
    <p><strong>Hier eine Auswahl unserer Pakete:</strong></p>
    <b-row>
      <b-col sm="4">
        <Web1 />
      </b-col>
      <b-col sm="4">
        <Web2 />
      </b-col>
      <b-col sm="4">
        <Web3 />
      </b-col>
    </b-row>
    <p>
      Zusätzliche Domain-Preise auf Anfrage. Falls Sie weitere
      Konfigurationswünsche haben, sprechen Sie mit uns wir erstellen Ihnen ein
      individuelles Angebot. Lassen Sie sich von der Funktionsvielfalt unseres
      Systems überraschen. Aktuelle Bereitstellungszeit: ca. 1-2 Arbeitstage
      (Montag - Freitag) nach Zahlung.
    </p>
    <p>
      Es fallen keine Einrichtungskosten für .de Pakete an.* <br />Die Zahlung
      erfolgt, soweit nicht anders angegeben, für 1 Jahr im Voraus. Die
      Mindestlaufzeit beträgt 1 Jahr und verlängert sich um jeweils 1 Jahr, wenn
      nicht bis zwei Monate vor Laufzeitende eine schriftliche Kündigung
      vorliegt. <br />
      <i>
        *Wenn monatliche Abrechnung gewünscht ist fallen einmalig 19,95€
        Einrichtungsgebühr pro .de Paket/Domain an.
      </i>
      <br />
      Alle Preisangaben verstehen sich monatlich inklusive der gesetzlichen
      MwSt.
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Web1 from '@/components/Home/Hosting.Web1.vue';
import Web2 from '@/components/Home/Hosting.Web2.vue';
import Web3 from '@/components/Home/Hosting.Web3.vue';

@Component({
  components: {
    Web1,
    Web2,
    Web3,
  },
})
export default class Hosting extends Vue {}
</script>
