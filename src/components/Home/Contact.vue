<template>
  <section>
    <b-container class="text-center">
      <h2>Kontakt</h2>
      <b-form :model="form" @submit.prevent="submit" ref="contactForm">
        <b-row>
          <b-form-group class="col">
            <b-form-input type="text" placeholder="Name" id="name" required />
          </b-form-group>
          <b-form-group class="col">
            <b-form-input
              type="email"
              placeholder="Email"
              id="email"
              required
            />
          </b-form-group>
        </b-row>
        <b-row>
          <b-form-group class="col">
            <b-form-input
              type="text"
              placeholder="Betreff"
              id="subject"
              required
            />
          </b-form-group>
          <b-form-group class="col">
            <b-form-input
              type="text"
              placeholder="Telefonnummer"
              id="number"
              required
            />
          </b-form-group>
        </b-row>
        <b-row>
          <b-form-group class="col">
            <b-form-textarea
              placeholder="Ihre Nachricht"
              rows="5"
              id="message"
              required
            />
          </b-form-group>
        </b-row>
        <b-row>
          <b-form-group class="col text-left">
            <VueRecaptcha
              ref="recaptcha"
              :sitekey="sitekey"
              loadRecaptchaScript
              @verify="onVerify"
            />
            <p v-if="error" class="text-danger">
              Bitte bestätigen Sie das reCaptcha!
            </p>
          </b-form-group>
          <b-form-group class="col text-right">
            <b-button type="submit" variant="secondary">Senden</b-button>
          </b-form-group>
        </b-row>
      </b-form>
    </b-container>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VueRecaptcha from 'vue-recaptcha';
import sitekeys from '@/config/sitekeys.json';

const { google } = sitekeys;

@Component({
  components: {
    VueRecaptcha,
  },
})
export default class Contact extends Vue {
  sitekey = google.sitekey;

  form = { isHuman: false };

  error = false;

  submit() {
    if (this.error) this.error = true;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onVerify(response: any) {
    if (response) this.form.isHuman = true;
  }
}
</script>
