<template>
  <b-container>
    <About id="about" />
  </b-container>
</template>

<script lang="ts">
import About from '@/components/About.vue';
import Contact from '@/components/Contact.vue';
import Hosting from '@/components/Hosting.vue';
import Maintenance from '@/components/Maintenance.vue';
import Office365 from '@/components/Office365.vue';
import Security from '@/components/Security.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    About,
    Contact,
    Hosting,
    Maintenance,
    Office365,
    Security,
  },
})
export default class Home extends Vue {}
</script>
