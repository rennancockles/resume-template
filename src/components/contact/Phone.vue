<template>
  <v-list-item
  three-line
  :href="`tel:${onlyNum(phone)}`"
  v-if="phone"
  >
    <v-list-item-icon>
      <v-icon>mdi-cellphone</v-icon>
    </v-list-item-icon>

    <v-list-item-content>
      <v-list-item-title>Telefone</v-list-item-title>
      <v-list-item-subtitle class="wrap-text" v-text="phone"></v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script>

export default {
  name: 'Phone',

  props: {
    phone: {
      type: String,
      default: ''
    }
  },

  methods: {
    onlyNum: (value) => {
      if (!value) return ''
      value = value.toString()
      return value.replace(/[^\d+]/g, '')
    }
  }
}
</script>
