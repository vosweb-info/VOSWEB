<template>
  <b-navbar
    toggleable="xl"
    type="light"
    variant="light"
    class="shadow-sm"
    v-b-scrollspy="140"
    sticky
  >
    <b-container>
      <b-navbar-brand to="/">
        <img src="@/assets/vosweb-logo.webp" alt="logo" height="40" />
      </b-navbar-brand>

      <div v-if="['Home'].includes($route.name)">
        <b-navbar-toggle target="nav-collapse" />

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="#about"> Über uns </b-nav-item>
            <b-nav-item to="#solutions">IT-Lösungen</b-nav-item>
            <b-nav-item to="#maintenance"> Administration/Wartung </b-nav-item>
            <b-nav-item to="#security"> IT-Sicherheit </b-nav-item>
            <b-nav-item to="#office365"> Office365-Integration </b-nav-item>
            <b-nav-item to="#hosting"> Hosting/Webdesign </b-nav-item>
            <b-nav-item to="#contact"> Kontakt </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-container>
  </b-navbar>
</template>
