<template>
  <v-card
    class="mx-auto my-5"
    max-width="90%"
    outlined
    shaped
    elevation="2"
  >
    <v-card-title>Formação</v-card-title>

    <v-card-text>
      <v-list>
        <v-list-item>
          <v-list-item-icon>
            <v-list-item-title>2012 - 2017</v-list-item-title>
            <v-list-item-subtitle class="wrap-text">
              Nova Friburgo - RJ
            </v-list-item-subtitle>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
              Engenharia de Computação
            </v-list-item-title>
            <v-list-item-subtitle class="wrap-text">
              Universidade do Estado do Rio de Janeiro, UERJ
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-list-item-title>2020</v-list-item-title>
            <v-list-item-subtitle class="wrap-text">
              Belo Horizonte - MG
            </v-list-item-subtitle>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
              Pós-Graduação em Analytics e Business Intelligence
            </v-list-item-title>
            <v-list-item-subtitle class="wrap-text">
              Pontifícia Universidade Católica de Minas Gerais, PUCMG
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>

export default {
  name: 'Education',

  components: {
  },

  data: () => ({
    //
  })
}
</script>

<style scoped>
p {
  text-indent: 1rem;
  margin: 0;
}

.v-list-item__icon {
  flex-wrap: wrap;
  width: 150px;
}

.v-list-item__content {
  margin: 16px 0 16px 32px;
  padding: 0;
  align-self: flex-start;
}
</style>
