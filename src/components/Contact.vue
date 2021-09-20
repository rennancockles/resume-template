<template>
  <v-list>
    <v-subheader>Contato</v-subheader>

    <v-list-item three-line>
      <v-list-item-icon>
        <v-icon>mdi-map-marker-outline</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>Endereço</v-list-item-title>
        <v-list-item-subtitle class="wrap-text">Rua Felício Vassalo, 7, frente, Cônego</v-list-item-subtitle>
        <v-list-item-subtitle class="wrap-text">Nova Friburgo - RJ</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list-item three-line href="tel:+5522996223098">
      <v-list-item-icon>
        <v-icon>mdi-cellphone</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>Telefone</v-list-item-title>
        <v-list-item-subtitle class="wrap-text">+55 (22) 99622-3098</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list-item three-line href="mailto:rcdev@hotmail.com.br">
      <v-list-item-icon>
        <v-icon>mdi-email-outline</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>E-mail</v-list-item-title>
        <v-list-item-subtitle class="wrap-text">rcdev@hotmail.com.br</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list-item three-line href="https://www.linkedin.com/in/rennancockles">
      <v-list-item-icon>
        <v-icon>mdi-linkedin</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>Linkedin</v-list-item-title>
        <v-list-item-subtitle class="wrap-text">https://www.linkedin.com/in/rennancockles</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list-item three-line href="https://www.github.com/rennancockles">
      <v-list-item-icon>
        <v-icon>mdi-github</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>Github</v-list-item-title>
        <v-list-item-subtitle class="wrap-text">https://www.github.com/rennancockles</v-list-item-subtitle>
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
