<template>
  <div id="home">
    <cover id="cover" />
    <about id="about" />
    <solutions id="solutions" />
    <maintenance id="maintenance" />
    <security id="security" />
    <office-365 id="office365" />
    <hosting id="hosting" />
    <contact id="contact" />
  </div>
</template>

<script lang="ts">
import About from '@/components/Home/About.vue';
import Contact from '@/components/Home/Contact.vue';
import Cover from '@/components/Cover.vue';
import Hosting from '@/components/Home/Hosting.vue';
import Maintenance from '@/components/Home/Maintenance.vue';
import Office365 from '@/components/Home/Office365.vue';
import Security from '@/components/Home/Security.vue';
import Solutions from '@/components/Home/Solutions.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    About,
    Contact,
    Cover,
    Hosting,
    Maintenance,
    Office365,
    Security,
    Solutions,
  },
})
export default class Home extends Vue {}
</script>
