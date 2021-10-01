<template>
  <v-list-item
  v-if="url"
  :href="url"
  target="_blank"
  three-line
  >
    <v-list-item-icon>
      <v-icon>mdi-web</v-icon>
    </v-list-item-icon>

    <v-list-item-content>
      <v-list-item-title>{{$t('site')}}</v-list-item-title>
      <v-list-item-subtitle class="wrap-text" v-text="url"></v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script>

export default {
  name: 'Site',

  props: {
    url: {
      type: String,
      default: ''
    }
  }
}
</script>
