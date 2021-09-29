<template>
  <v-list-item
  three-line
  :href="`mailto:${email}`"
  v-if="email"
  >
    <v-list-item-icon>
      <v-icon>mdi-email-outline</v-icon>
    </v-list-item-icon>

    <v-list-item-content>
      <v-list-item-title>{{ $t('email') }}</v-list-item-title>
      <v-list-item-subtitle class="wrap-text" v-text="email"></v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script>

export default {
  name: 'Email',

  props: {
    email: {
      type: String,
      default: ''
    }
  }
}
</script>
