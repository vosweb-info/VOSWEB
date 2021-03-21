<template>
  <section class="bg-light">
    <b-container class="text-center">
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
      <b-row class="my-4">
        <b-col md="4" class="pb-3 pb-md-0" align-self="center">
          <WebPackages :webPackage="hostingPackages[0]" />
        </b-col>
        <b-col md="4" class="pb-3 pb-md-0" align-self="center">
          <WebPackages :webPackage="hostingPackages[1]" />
        </b-col>
        <b-col md="4" align-self="center">
          <WebPackages :webPackage="hostingPackages[2]" />
        </b-col>
      </b-row>
      <p>
        Zusätzliche Domain-Preise auf Anfrage. Falls Sie weitere
        Konfigurationswünsche haben, sprechen Sie mit uns wir erstellen Ihnen
        ein individuelles Angebot. Lassen Sie sich von der Funktionsvielfalt
        unseres Systems überraschen. Aktuelle Bereitstellungszeit: ca. 1-2
        Arbeitstage (Montag - Freitag) nach Zahlung.
      </p>
      <p>
        Es fallen keine Einrichtungskosten für .de Pakete an.* <br />Die Zahlung
        erfolgt, soweit nicht anders angegeben, für 1 Jahr im Voraus. Die
        Mindestlaufzeit beträgt 1 Jahr und verlängert sich um jeweils 1 Jahr,
        wenn nicht bis zwei Monate vor Laufzeitende eine schriftliche Kündigung
        vorliegt. <br />
        <i>
          *Wenn monatliche Abrechnung gewünscht ist fallen einmalig 19,95€
          Einrichtungsgebühr pro .de Paket/Domain an.
        </i>
        <br />
        Alle Preisangaben verstehen sich monatlich inklusive der gesetzlichen
        MwSt.
      </p>
    </b-container>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import WebPackages from '@/components/WebPackages.vue';

@Component({
  components: {
    WebPackages,
  },
})
export default class Hosting extends Vue {
  hostingPackages = [
    {
      title: 'WEB-Paket 1/1000',
      name: 'Web-Privat',
      price: '2,49',
      services: [
        'inkl. eine .de Domain',
        '5 Subdomains',
        '5 GB Traffic',
        'Webspace: 1000 MB',
        '5 Emailadressen',
        'Postfachgröße: bis 1 GB',
        '1 MySQL Datenbank',
        'Zugriff auf Vosweb-Webserver',
      ],
    },
    {
      title: 'WEB-Paket 5',
      name: 'Web-Power',
      price: '6,49',
      services: [
        'inkl. zwei .de Domains oder eine .com/.net/.org/.at/.biz./.info/.eu',
        '20 Subdomains',
        '10 FTP Konten',
        '15 GB Traffic',
        'Webspace: 5000MB',
        '15 Emailadressen',
        'Postfachgröße: 5 GB',
        '5 MySQL Datenbanken',
        'Zugriff auf Vosweb-Webserver',
      ],
    },
    {
      title: 'WEB-Paket 1/2000',
      name: 'Web-PRO',
      price: '4,49',
      services: [
        'inkl. eine .de Domain',
        '10 Subdomains',
        '10 GB Traffic',
        'Webspace: 2000MB',
        '5 Emailadressen',
        'Postfachgröße: bis 2 GB',
        '2 MySQL Datenbanken',
        'Zugriff auf Vosweb-Webserver',
      ],
    },
  ];
}
</script>
