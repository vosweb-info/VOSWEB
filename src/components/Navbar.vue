<template>
  <b-navbar
    toggleable="xl"
    type="light"
    variant="light"
    class="shadow-sm"
    v-b-scrollspy="navbarOffset * 2"
    sticky
  >
    <b-container>
      <b-navbar-brand to="/">
        <img src="@/assets/images/vosweb-logo.png" alt="logo" height="30" />
      </b-navbar-brand>

      <div v-if="['Home'].includes($route.name)">
        <b-navbar-toggle target="nav-collapse" />

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#about" @click="scroll"> Über uns </b-nav-item>
            <b-nav-item href="#solutions" @click="scroll"
              >IT-Lösungen</b-nav-item
            >
            <b-nav-item href="#maintenance" @click="scroll">
              Administration/Wartung
            </b-nav-item>
            <b-nav-item href="#security" @click="scroll">
              IT-Sicherheit
            </b-nav-item>
            <b-nav-item href="#office365" @click="scroll">
              Office365-Integration
            </b-nav-item>
            <b-nav-item href="#hosting" @click="scroll">
              Hosting/Webdesign
            </b-nav-item>
            <b-nav-item href="#contact" @click="scroll"> Kontakt </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-container>
  </b-navbar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Navbar extends Vue {
  navbarOffset = 70;

  scroll(event: Event) {
    event.preventDefault();
    const target = (event.target as HTMLTextAreaElement);
    const href = target.getAttribute('href');
    const element = href ? document.querySelector(href) : null;
    if (element) {
      const offset = element.getBoundingClientRect().top
        + window.pageYOffset
        - this.navbarOffset;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  }
}
</script>
