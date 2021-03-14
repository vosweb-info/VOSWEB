import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/views/Home.vue';
import LegalNotice from '@/views/LegalNotice.vue';
import PrivacyPolicy from '@/views/PrivacyPolicy.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/impressum',
    name: 'Impressum',
    component: LegalNotice,
  },
  {
    path: '/datenschutz',
    name: 'Datenschutz',
    component: PrivacyPolicy,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to) {
    return { selector: to.hash ? to.hash : '#app', behavior: 'smooth', offset: { x: 0, y: 60 } };
  },
});

export default router;
