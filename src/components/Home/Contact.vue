<template>
  <section>
    <b-container>
      <h2>Kontakt</h2>
      <b-form>
        <b-row>
          <b-form-group class="col">
            <b-form-input type="text" placeholder="Name" required />
          </b-form-group>
          <b-form-group class="col">
            <b-form-input type="email" placeholder="Email" required />
          </b-form-group>
        </b-row>
        <b-row>
          <b-form-group class="col">
            <b-form-input type="text" placeholder="Betreff" required />
          </b-form-group>
          <b-form-group class="col">
            <b-form-input type="text" placeholder="Telefonnummer" required />
          </b-form-group>
        </b-row>
        <b-row>
          <b-form-group class="col">
            <b-form-textarea placeholder="Ihre Nachricht" rows="5" />
          </b-form-group>
        </b-row>
        <b-row>
          <b-form-group class="col">
            <b-button type="submit" variant="secondary">Senden</b-button>
          </b-form-group>
        </b-row>
      </b-form>
    </b-container>
  </section>
</template>
