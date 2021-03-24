import '@/app.scss';
import App from '@/App.vue';
import sitekeys from '@/config/sitekeys.json';
import router from '@/router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faMicrosoft, faTwitter } from '@fortawesome/free-brands-svg-icons';
import {
  faClipboardCheck,
  faEnvelope,
  faLock,
  faPhone,
  faUsers,
  faWrench,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import axios from 'axios';
import {
  AlertPlugin,
  BadgePlugin,
  ButtonPlugin,
  CardPlugin,
  FormGroupPlugin,
  FormInputPlugin,
  FormPlugin,
  FormTextareaPlugin,
  LayoutPlugin,
  LinkPlugin,
  NavPlugin,
  NavbarPlugin,
  ProgressPlugin,
  VBScrollspyPlugin,
} from 'bootstrap-vue';
import Vue from 'vue';
import VueAxios from 'vue-axios';
import TrustpilotPlugin from 'vue-trustpilot';

library.add(
  faUsers,
  faClipboardCheck,
  faWrench,
  faLock,
  faPhone,
  faEnvelope,
  faMicrosoft,
  faLinkedin,
  faTwitter,
);

const { trustpilot } = sitekeys;

const trustPilotOptions = {
  widgets: {
    list: {
      templateId: trustpilot.templateId,
      businessunitId: trustpilot.businessunitId,
      reviewUrl: 'https://de.trustpilot.com/review/www.vosweb.de',
      locale: 'de-DE',
      theme: 'dark',
    },
  },
};

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

[
  AlertPlugin,
  BadgePlugin,
  ButtonPlugin,
  CardPlugin,
  FormGroupPlugin,
  FormInputPlugin,
  FormPlugin,
  FormTextareaPlugin,
  LayoutPlugin,
  LinkPlugin,
  NavPlugin,
  NavbarPlugin,
  ProgressPlugin,
  VBScrollspyPlugin,
].forEach((plugin) => Vue.use(plugin));

Vue.use(TrustpilotPlugin, trustPilotOptions);

Vue.use(VueAxios, axios);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
