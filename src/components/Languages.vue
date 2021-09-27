<template>
  <v-list class="grey darken-3" dark>
    <v-subheader>Idiomas</v-subheader>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-translate</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>Português</v-list-item-title>
        <v-list-item-subtitle class="wrap-text">Nativo</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-translate</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>Inglês</v-list-item-title>
        <v-list-item-subtitle class="wrap-text">Avançado</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

  </v-list>
</template>

<script>

export default {
  name: 'Contact',

  components: {
  },

  data: () => ({
    //
  })
}
</script>
