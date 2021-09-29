<template>
  <v-list
  v-if="anyLanguage"
  class="grey darken-3"
  dark
  >
    <v-subheader>{{ $t('languages') }}</v-subheader>

    <v-list-item
    three-line
    v-for="(item, i) in filteredData"
    :key="i"
    >
      <v-list-item-icon>
        <v-icon>mdi-translate</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>{{item.language}}</v-list-item-title>
        <v-list-item-subtitle class="wrap-text">{{item.level}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

  </v-list>
</template>

<script>

export default {
  name: 'Languages',

  props: {
    data: {
      type: Array,
      default: function () {
        return []
      }
    }
  },

  components: {
  },

  computed: {
    anyLanguage () {
      return this.filteredData.length > 0
    },
    filteredData () {
      return this.data.filter(item => {
        return item.language && item.level
      })
    }
  }
}
</script>
