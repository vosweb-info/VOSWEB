<template>
  <div>
    <b-row>
      <b-col>
        <vue-trustpilot
          identifier="list"
          data-style-height="24px"
          data-style-width="100%"
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col class="text-center">
        <a
          :href="`https://www.btrusted.de/profile/standalone/${btrustedId}`"
          target="_blank"
        >
          <img
            :src="`https://www.btrusted.de/seal/imageweb/${btrustedId}.png?size=3&type=2`"
            alt="btrusted-Siegel"
          />
        </a>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import sitekey from '@/config/sitekeys.json';

const { btrusted } = sitekey;

@Component
export default class Reviews extends Vue {
  btrustedId = btrusted.id;
}
</script>
