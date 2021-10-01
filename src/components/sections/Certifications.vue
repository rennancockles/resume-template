<template>
  <v-list
  v-if="anyCertification"
  class="grey darken-3"
  dark
  >
    <v-subheader>{{ $t('certifications') }}</v-subheader>

    <v-list-item
    three-line
    v-for="(item, i) in filteredData"
    :key="i"
    :href="item.url"
    target="_blank"
    >
      <v-list-item-icon>
        <v-icon>mdi-certificate-outline</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-subtitle class="white--text">{{item.date}}</v-list-item-subtitle>
        <v-list-item-title>{{item.org}}</v-list-item-title>
        <v-list-item-subtitle class="wrap-text">{{item.name}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>

export default {
  name: 'Certifications',

  props: {
    data: {
      type: Array,
      default: function () {
        return []
      }
    }
  },

  computed: {
    anyCertification () {
      return this.filteredData.length > 0
    },
    filteredData () {
      return this.data.filter(item => {
        return item.date && item.org && item.name
      })
    }
  }
}
</script>
