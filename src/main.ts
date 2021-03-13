import '@/app.scss';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faClipboardCheck,
  faEnvelope,
  faLock,
  faPhone,
  faUsers,
  faWrench,
} from '@fortawesome/free-solid-svg-icons';
import { faMicrosoft, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { BootstrapVue } from 'bootstrap-vue';
import Vue from 'vue';

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

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
