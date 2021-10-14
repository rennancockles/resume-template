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
            <v-list-item-content
            class="stacked-view d-print-none hidden-sm-and-up"
            >
              <v-list-item-title
              class="wrap-text"
              v-text="item.position"
              ></v-list-item-title>

              <v-list-item-subtitle
              v-text="formatDate(item.startDate, item.endDate)"
              ></v-list-item-subtitle>

              <v-list-item-subtitle
              class="employer"
              v-text="item.employer"
              ></v-list-item-subtitle>

              <v-list-item-subtitle
              class="wrap-text"
              >
                {{ item.location }}
                <span v-if="item.remote">
                  • {{ $t('remote') }}
                </span>
              </v-list-item-subtitle>

              <v-list-item-action-text
              class="wrap-text description"
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

.v-list-item__action-text {
  margin-top: 10px;
}

.v-list-item__content.stacked-view .v-list-item__title {
  font-size: 3vw;
}
.v-list-item__content.stacked-view .v-list-item__subtitle,
.v-list-item__content.stacked-view .v-list-item__action-text {
  font-size: 2.625vw;
}

div.normal-view .v-list-item__icon {
  flex-wrap: wrap;
  width: 150px;
}
div.normal-view .v-list-item__content {
  margin: 16px 0 16px 32px;
  padding: 0;
  align-self: flex-start;
}

div.normal-view .v-list-item__title,
div.normal-view .v-list-item__subtitle.employer {
  font-size: min(2vw, 1rem);
}
div.normal-view .v-list-item__subtitle {
  font-size: min(1.8vw, 0.875rem);
}
div.normal-view .v-list-item__action-text {
  font-size: min(1.8vw, 0.75rem);
}
div.normal-view .v-list-item__icon {
  width: 100%;
}
</style>
