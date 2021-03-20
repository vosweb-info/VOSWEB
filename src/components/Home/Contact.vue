<template>
  <section>
    <b-container class="text-center">
      <h2>Kontakt</h2>
      <b-form :model="form" @submit.prevent="submit" ref="contactForm">
        <b-row>
          <b-form-group class="col">
            <b-form-input type="text" placeholder="Name" required />
          </b-form-group>
          <b-form-group class="col">
            <b-form-input type="email" placeholder="Email" required />
          </b-form-group>
        </b-row>
        <b-row>
          <b-form-group class="col">
            <b-form-input type="text" placeholder="Betreff" required />
          </b-form-group>
          <b-form-group class="col">
            <b-form-input type="text" placeholder="Telefonnummer" required />
          </b-form-group>
        </b-row>
        <b-row>
          <b-form-group class="col">
            <b-form-textarea placeholder="Ihre Nachricht" rows="5" required/>
          </b-form-group>
        </b-row>
        <b-row>
          <b-form-group class="col">
            <VueRecaptcha
              ref="recaptcha"
              sitekey="sitekey"
              loadRecaptchaScript
              @verify="onVerify"
            />
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

@Component({
  components: {
    VueRecaptcha,
  },
})
export default class Contact extends Vue {
  sitekey = process.env.GOOGLE_CAPTCHA;

  form = { robot: false };

  submit() {
    if (this.form.robot) {
      console.log(this.form);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onVerify(response: any) {
    if (response) this.form.robot = true;
  }
}
</script>
