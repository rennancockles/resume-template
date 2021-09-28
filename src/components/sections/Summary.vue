<template>
  <v-card
  v-if="summaryLines"
  class="mx-auto my-5 my-card"
  max-width="90%"
  outlined
  shaped
  elevation="2"
  >
    <v-card-title>Resumo</v-card-title>

    <v-card-text>
      <p v-for="(line, i) in summaryLines" :key="i" v-text="line"></p>
    </v-card-text>
  </v-card>
</template>

<script>

export default {
  name: 'Summary',

  props: {
    summary: {
      type: String,
      default: ''
    }
  },

  computed: {
    summaryLines () {
      return this.summary.split('\n')
    }
  }
}
</script>

<style scoped>
p {
  text-indent: 1rem;
  margin: 0;
}
</style>
