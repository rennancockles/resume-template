<template>
  <v-card
  v-if="anyEducation"
  class="mx-auto my-5 my-card"
  max-width="90%"
  outlined
  shaped
  elevation="2"
  >
    <v-card-title>{{ $t('education') }}</v-card-title>

    <v-card-text>
      <v-list>
        <v-container fluid class="pa-0">
          <v-list-item
          three-line
          class="px-0"
          v-for="(item, i) in filteredData"
          :key="i"
          >
            <v-list-item-content
            class="stacked-view d-print-none hidden-sm-and-up"
            >
              <v-list-item-title
              v-text="item.title"
              ></v-list-item-title>

              <v-list-item-subtitle
              class="wrap-text"
              v-text="item.org"
              ></v-list-item-subtitle>

              <v-list-item-subtitle
              class="wrap-text"
              v-text="item.location"
              ></v-list-item-subtitle>

              <v-list-item-subtitle
              class="wrap-text"
              v-text="formatDate(item.startDate, item.endDate)"
              ></v-list-item-subtitle>
            </v-list-item-content>

            <v-row
            no-gutters
            class="normal-view hidden-xs-only"
            >
              <v-col cols="3">
                <v-list-item-icon>
                  <v-list-item-title
                  v-text="formatDate(item.startDate, item.endDate)"
                  ></v-list-item-title>

                  <v-list-item-subtitle
                  class="wrap-text"
                  v-text="item.location"
                  ></v-list-item-subtitle>
                </v-list-item-icon>
              </v-col>

              <v-col cols="9">
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>

                  <v-list-item-subtitle
                  class="wrap-text"
                  v-text="item.org"
                  ></v-list-item-subtitle>
                </v-list-item-content>
              </v-col>
            </v-row>
          </v-list-item>
        </v-container>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>

export default {
  name: 'Education',

  props: {
    data: {
      type: Array,
      default: function () {
        return []
      }
    }
  },

  computed: {
    anyEducation () {
      return this.filteredData.length > 0
    },
    filteredData () {
      return this.data.filter(item => {
        return item.startDate && item.org && item.title
      })
    }
  },

  methods: {
    formatDate: (startDate, endDate) => {
      if (endDate) {
        return `${startDate} - ${endDate}`
      }
      return startDate
    }
  }
}
</script>

<style scoped>
.v-list-item__content.stacked-view .v-list-item__title {
  font-size: 3vw;
}
.v-list-item__content.stacked-view .v-list-item__subtitle {
  font-size: 2.625vw;
}

div.normal-view .v-list-item__icon {
  flex-wrap: wrap;
  width: 150px;
  width: 100%;
}
div.normal-view .v-list-item__content {
  margin: 16px 0 16px 32px;
  padding: 0;
  align-self: flex-start;
}
</style>
