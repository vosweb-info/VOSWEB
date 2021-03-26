<template>
  <section>
    <b-container class="text-center">
      <h2>Kontakt</h2>
      <b-form :model="form" @submit.prevent="submit" ref="contactForm">
        <b-row>
          <b-form-group class="col-sm">
            <b-form-input
              type="text"
              placeholder="Name"
              id="name"
              v-model="form.name"
              minlength="3"
              required
            />
          </b-form-group>
          <b-form-group class="col-sm">
            <b-form-input
              type="email"
              placeholder="Email"
              id="email"
              v-model="form.email"
              minlength="3"
              required
            />
          </b-form-group>
        </b-row>
        <b-row>
          <b-form-group class="col-sm">
            <b-form-input
              type="text"
              placeholder="Betreff"
              id="subject"
              v-model="form.subject"
              minlength="3"
              required
            />
          </b-form-group>
          <b-form-group class="col-sm">
            <b-form-input
              type="text"
              placeholder="Telefonnummer"
              id="phone"
              v-model="form.phone"
              minlength="3"
              required
            />
          </b-form-group>
        </b-row>
        <b-row>
          <b-form-group class="col-sm">
            <b-form-textarea
              placeholder="Ihre Nachricht"
              rows="5"
              id="message"
              v-model="form.message"
              required
            />
          </b-form-group>
        </b-row>
        <b-row>
          <b-col>
            <b-alert :show="error.length" variant="danger">
              {{ error }}
            </b-alert>
            <b-alert
              :show="success"
              variant="success"
              dismissible
              @dismissed="success = 0"
              @dismiss-count-down="successCountDown"
            >
              Vielen Dank für Ihre Nachricht!
              <b-progress
                variant="success"
                :max="successSecs"
                :value="success"
                height="2px"
              />
            </b-alert>
          </b-col>
        </b-row>
        <b-row>
          <b-form-group class="col-sm">
            <vue-recaptcha
              ref="recaptcha"
              :sitekey="sitekey"
              loadRecaptchaScript
              @verify="onVerify"
            />
          </b-form-group>
          <b-form-group class="col-sm text-sm-right">
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

const { NODE_ENV } = process.env;
const { google } = sitekeys;

const url = NODE_ENV === 'production' ? '' : 'http://localhost:3000';
let verification: string;

@Component({
  components: {
    VueRecaptcha,
  },
})
export default class Contact extends Vue {
  sitekey = google.sitekey;

  form = {
    isHuman: false,
    name: '',
    email: '',
    phone: null,
    subject: '',
    message: '',
  };

  error = '';

  success = 0;

  successSecs = 5;

  successAlert = false;

  successCountDown(countDown: number) {
    this.success = countDown;
  }

  submit() {
    if (!this.form.isHuman) this.error = 'Bitte bestätigen Sie das reCaptcha!';
    else {
      this.axios
        .post(`${url}/api/v1/mail`, {
          name: this.form.name,
          email: this.form.email,
          phone: this.form.phone,
          subject: this.form.subject,
          message: this.form.message.replace(/(?:\r\n|\r|\n)/g, '<br />'),
          verification,
        })
        .then(() => {
          this.error = '';
          this.successAlert = true;
          this.success = this.successSecs;
          this.form = {
            isHuman: false,
            name: '',
            email: '',
            phone: null,
            subject: '',
            message: '',
          };
          (this.$refs.recaptcha as VueRecaptcha).reset();
        })
        .catch(() => {
          this.error = 'Ein Fehler ist aufgetreten, bitte versuchen Sie es später erneut';
        });
    }
  }

  onVerify(response: string) {
    if (response) {
      this.form.isHuman = true;
      this.error = '';
      verification = response;
    } else {
      this.form.isHuman = false;
      this.error = 'Ein Fehler ist aufgetreten, bitte versuchen Sie es später erneut';
    }
  }
}
</script>
