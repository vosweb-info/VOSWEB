<template>
  <footer class="bg-dark text-white">
    <b-container class="pt-3">
      <b-row class="text-center">
        <b-col lg md="6">
          <img
            src="@/assets/vosweb-logo-white.webp"
            style="max-height: 40px"
          />
          <div class="py-3">
            <a href="https://twitter.com/voswebde" target="_blank" class="mx-2">
              <font-awesome-icon :icon="['fab', 'twitter']" />
            </a>
            <a
              href="https://www.linkedin.com/in/vosweb"
              target="_blank"
              class="mx-2"
            >
              <font-awesome-icon :icon="['fab', 'linkedin']" />
            </a>
          </div>
        </b-col>
        <b-col lg md="6">
          <p><strong>Adresse:</strong></p>
          <p>
            Gaisthalerhammer 6<br />
            92539 Schönsee<br />
            <i>(kein Ladengeschäft)</i>
          </p>
        </b-col>
        <b-col lg md="6">
          <p><strong>Kontakt:</strong></p>
          <p>
            <font-awesome-icon :icon="['fas', 'phone']" class="mr-1" />
            0 96 74 / 68 30 171<br />
            <font-awesome-icon :icon="['fas', 'envelope']" class="mr-1" />
            mail@vosweb.de<br />
          </p>
        </b-col>
        <b-col lg md="6">
          <p><strong>Links:</strong></p>
          <p>
            <b-link to="/impressum">Impressum</b-link><br />
            <b-link to="/datenschutz">Datenschutz</b-link><br />
            <a href="http://baukasten.vosweb.de/" target="_blank">
              Baukasten
            </a>
            <br />
            <a
              href="/docs/Dienstleistungs-AGB_vosweb.pdf"
              target="_blank"
            >
              AGB <b-badge variant="light">PDF, 995KB</b-badge>
            </a>
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="border-top border-light pt-4 mt-4 text-center">
          &copy; Volker Schierenberg VOSWEB, {{ new Date().getFullYear() }}
        </b-col>
      </b-row>
      <Reviews />
    </b-container>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Reviews from '@/components/Reviews.vue';

@Component({
  components: {
    Reviews,
  },
})
export default class Footer extends Vue {}
</script>

<style lang="scss" scoped>
.svg-inline--fa {
  color: white;
}

a {
  color: white;
  &:hover {
    color: darken(white, 15%);
  }
}
</style>
