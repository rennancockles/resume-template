<template>
  <v-card
    class="mx-auto my-5"
    max-width="90%"
    outlined
    shaped
    elevation="2"
  >
    <v-card-title>Resumo</v-card-title>

    <v-card-text>
      <p>Engenheiro de Computação com ênfase em modelagem computacional pela Universidade do Estado do Rio de Janeiro com mais de 10 anos de experiência em áreas de tecnologia como engenharia de software, inteligência artificial, infraestrutura etc.</p>
      <p>Engenheiro de dados com foco em solução de problemas e forte background em desenvolvimento, capaz de construir aplicações bem estruturadas e de fácil manutenção, seguindo as melhores práticas de arquitetura e design.</p>
    </v-card-text>
  </v-card>
</template>

<script>

export default {
  name: 'Summary',

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
</style>
