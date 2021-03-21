<template>
  <div class="cover-image">
    <b-container class="text-white">
      <div class="cover-text p-4 shadow-sm">
        <h1 class="display-5 text-white">Ihr regionaler Ansprechpartner für:</h1>
        <p>
          <strong>» Software:</strong>
          MS-Office • Office365-Integration<br />
          <strong>» Netzwerk:</strong>
          Netzwerk-Planung/-Betreuung • Serverbetreuung • Virtualisierung<br />
          <strong>» Sicherheitskonzepte:</strong>
          Datensicherung • Virenschutz • Datenrettung<br />
          <strong>» Internet:</strong>
          Webspace • Webdesign • Cloudlösungen • Domainregistrierung<br />
          <strong>» Hardware:</strong>
          Kaufberatung • Wartung • Reparaturen<br />
        </p>
      </div>
    </b-container>
  </div>
</template>

<style lang="scss" scoped>
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';

.cover-image {
  background: url("../assets/coverimage.webp") no-repeat fixed right;
  background-size: cover;
  min-height: 50vh;
  padding-top: 150px;
  padding-bottom: 1rem;

  @media (max-width: #{map-get($grid-breakpoints, "md")}) {
    padding-top: 1rem;
  }
}

.cover-text {
  background: rgba(0, 0, 0, 0.5);
  width: fit-content;
}
</style>
