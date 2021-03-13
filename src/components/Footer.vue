<template>
  <footer class="bg-dark text-white">
    <b-container>
      <b-row>
        <b-col>
          <img
            src="@/assets/images/vosweb-logo-white.png"
            style="max-height: 40px"
          />
          <div>
            <a href="https://twitter.com/voswebde" target="_blank">
              <font-awesome-icon :icon="['fab', 'twitter']" />
            </a>
            <a href="https://www.linkedin.com/in/vosweb" target="_blank">
              <font-awesome-icon :icon="['fab', 'linkedin']" />
            </a>
          </div>
        </b-col>
        <b-col>
          <p><strong>Adresse:</strong></p>
          <p>
            Gaisthalerhammer 6<br />
            92539 Schönsee<br />
            <i>(kein Ladengeschäft)</i>
          </p>
        </b-col>
        <b-col>
          <p><strong>Kontakt:</strong></p>
          <p>
            <font-awesome-icon :icon="['fas', 'phone']" />
            0 96 74 / 68 30 171<br />
            <font-awesome-icon :icon="['fas', 'envelope']" />
            mail@vosweb.de<br />
          </p>
        </b-col>
        <b-col>
          <p><strong>Links:</strong></p>
          <p>
            <b-link to="/impressum">Impressum</b-link><br />
            <b-link to="/datenschutz">Datenschutz</b-link><br />
            <a href="http://baukasten.vosweb.de/" target="_blank">
              Baukasten
            </a>
            <br />
            <a
              href="@/assets/docs/Dienstleistungs-AGB_vosweb.pdf"
              target="_blank"
              style="pointer-events: none"
            >
              AGB <b-badge style="secondary">PDF, 995KB</b-badge>
            </a>
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="border-top border-light">
          &copy; Volker Schierenberg VOSWEB, 2020
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>
