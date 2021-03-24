<template>
  <div id="app">
    <navbar />
    <router-view />
    <custom-footer />
    <cookies />
  </div>
</template>

<script lang="ts">
import Cookies from '@/components/Cookies.vue';
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Navbar,
    'custom-footer': Footer,
    Cookies,
  },
})
export default class App extends Vue {}
</script>
