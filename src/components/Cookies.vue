<template>
  <CookieLaw
    buttonText="Ok, verstanden"
    buttonClass="btn btn-primary text-nowrap"
  >
    <div slot="message">
      Um unsere Webseite für Sie optimal zu gestalten und fortlaufend verbessern
      zu können, verwenden wir Cookies. Durch die weitere Nutzung der Webseite
      stimmen Sie der Verwendung von Cookies zu. Weitere Informationen zu
      Cookies erhalten Sie in unseren
      <router-link to="/datenschutz">Datenschutzbestimmungen</router-link>
    </div>
  </CookieLaw>
</template>

<script lang="ts">
import CookieLaw from 'vue-cookie-law';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    CookieLaw,
  },
})
export default class App extends Vue {}
</script>
