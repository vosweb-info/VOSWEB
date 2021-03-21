import '@/app.scss';
import App from '@/App.vue';
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
import { BootstrapVue } from 'bootstrap-vue';
import Vue from 'vue';
import TrustpilotPlugin from 'vue-trustpilot';
import axios from 'axios';
import VueAxios from 'vue-axios';

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

const trustPilotOptions = {
  widgets: {
    list: {
      templateId: '5419b6a8b0d04a076446a9ad',
      businessunitId: '541be86d00006400057a6acd',
      reviewUrl: 'https://de.trustpilot.com/review/www.vosweb.de',
      locale: 'de-DE',
      theme: 'dark',
    },
  },
};

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(TrustpilotPlugin, trustPilotOptions);
Vue.use(VueAxios, axios);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
