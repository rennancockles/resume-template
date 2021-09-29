<template>
  <v-list-item three-line v-if="anyAddress">
    <v-list-item-icon>
      <v-icon>mdi-map-marker-outline</v-icon>
    </v-list-item-icon>

    <v-list-item-content>
      <v-list-item-title>{{ $t('address') }}</v-list-item-title>
      <v-list-item-subtitle class="wrap-text" v-text="address.line1"></v-list-item-subtitle>
      <v-list-item-subtitle class="wrap-text" v-text="address.line2"></v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script>

export default {
  name: 'Address',

  props: {
    address: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },

  computed: {
    anyAddress () {
      return this.address &&
        (this.address.line1 || this.address.line2)
    }
  }
}
</script>
