<template>
  <b-card no-body>
    <b-card-header header-bg-variant="primary">
      <b-card-title class="text-white">{{ webPackage.title }}</b-card-title>
      <b-card-sub-title>"{{ webPackage.name }}"</b-card-sub-title>
    </b-card-header>
    <b-card-body>
      <ul class="list-unstyled">
        <li v-for="service in webPackage.services" :key="service">
          {{ service }}
        </li>
      </ul>
    </b-card-body>
    <b-card-footer>
      <h3>
        {{ webPackage.price }} &euro;
        <small class="text-muted"> / Monat </small>
      </h3>
    </b-card-footer>
  </b-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class WebPackages extends Vue {
  @Prop()
  webPackage!: Array<Record<string, string>>;
}
</script>

<style lang="scss" scoped>
.card-subtitle {
  color: lightgray !important;
}
</style>
