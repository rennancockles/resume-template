<template>
  <v-card
  v-if="anyWorkExperience"
  class="mx-auto my-5 my-card"
  max-width="90%"
  outlined
  shaped
  elevation="2"
  >
    <v-card-title>{{ $t('workExperience') }}</v-card-title>

    <v-card-text>
      <v-list>
        <v-container fluid class="pa-0">
          <v-list-item
          three-line
          class="px-0"
          v-for="(item, i) in filteredData"
          :key="i"
          >
            <v-row no-gutters>
              <v-col cols="3">
                <v-list-item-icon>
                  <v-list-item-title
                  v-text="formatDate(item.startDate, item.endDate)"
                  ></v-list-item-title>

                  <v-list-item-subtitle
                  class="wrap-text"
                  v-text="item.location"
                  ></v-list-item-subtitle>

                  <v-list-item-subtitle v-if="item.remote">
                    • {{ $t('remote') }}
                  </v-list-item-subtitle>
                </v-list-item-icon>
              </v-col>

              <v-col cols="9">
                <v-list-item-content>
                  <v-list-item-title
                  v-text="item.employer"
                  ></v-list-item-title>

                  <v-list-item-subtitle
                  class="wrap-text"
                  v-text="item.position"
                  ></v-list-item-subtitle>

                  <v-list-item-action-text
                  class="wrap-text"
                  >
                    <p
                    v-for="(line, i) in splitLines(item.description)"
                    :key="i"
                    v-text="line"
                    ></p>
                  </v-list-item-action-text>

                  <v-list-item-action-text
                  class="wrap-text"
                  v-if="item.tools"
                  >
                    <span class="font-weight-bold">
                      {{$t('workTools')}}:
                    </span>
                    {{item.tools}}
                  </v-list-item-action-text>
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
  name: 'WorkExperience',

  props: {
    data: {
      type: Array,
      default: function () {
        return []
      }
    }
  },

  computed: {
    anyWorkExperience () {
      return this.filteredData.length > 0
    },
    filteredData () {
      return this.data.filter(item => {
        return item.startDate && item.employer && item.position
      })
    }
  },

  methods: {
    formatDate (startDate, endDate) {
      if (endDate) {
        return `${startDate} - ${endDate}`
      }
      return `${startDate} - ${this.$t('current')}`
    },
    splitLines (text) {
      return text.split('\n')
    }
  }
}
</script>

<style scoped>
p {
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

.v-list-item__action-text {
  margin-top: 10px;
}

.v-list-item__icon {
  width: 100%;
}
</style>
