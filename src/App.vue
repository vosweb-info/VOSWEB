<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
    <Cookies />
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
    Footer,
    Cookies,
  },
})
export default class App extends Vue {}
</script>
