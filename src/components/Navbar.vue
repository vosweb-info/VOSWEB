<template>
  <div>
    <b-navbar toggleable="xl" type="light" variant="light">
      <b-container>
        <b-navbar-brand to="/">
          <img src="@/assets/images/vosweb-logo.png" alt="logo" height="30" />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" />

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#about">Über uns</b-nav-item>
            <b-nav-item href="#solutions">IT-Lösungen</b-nav-item>
            <b-nav-item href="#maintenance">Administration/Wartung</b-nav-item>
            <b-nav-item href="#security">IT-Sicherheit</b-nav-item>
            <b-nav-item href="#office365">Office365-Integration</b-nav-item>
            <b-nav-item href="#hosting">Hosting/Webdesign</b-nav-item>
            <b-nav-item href="#contact">Kontakt</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>
