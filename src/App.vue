<template>
  <v-app class="printable">
    <v-main>
      <v-container fluid class="pa-0">
        <v-row no-gutters class="my-nav white--text elevation-5">
          <v-col
          cols="2"
          align-self="center"
          class="pl-2 d-flex d-print-none justify-start"
          >
            <v-btn
            id="print-btn"
            outlined
            dark
            @click="printWindow()"
            >
              <v-icon left>
                mdi-printer-outline
              </v-icon>
              {{$t('print')}}
            </v-btn>
          </v-col>
          <v-col cols="8" class="mx-auto">
            {{jsonData.name}}
            <div class="subheading">
              {{jsonData.title}}
            </div>
          </v-col>
          <v-col
          cols="2"
          align-self="center"
          class="pr-2 d-flex d-print-none justify-end"
          >
            <v-select
            v-model="locale"
            :items="locales"
            class="locale-select"
            prepend-inner-icon="mdi-translate"
            menu-props="auto"
            hide-details
            dark
            outlined
            ></v-select>
          </v-col>
        </v-row>

        <Resume :data="jsonData"/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Resume from '@/components/Resume'

export default {
  name: 'App',

  components: {
    Resume
  },

  data: () => ({
    localeData: {},
    locale: '',
    locales: []
  }),

  created () {
    this.loadJsonData()
    this.setLocale()
  },

  computed: {
    jsonData () {
      return this.localeData[this.locale]
    }
  },

  methods: {
    loadJsonData () {
      const context = require.context('@/data', true, /[A-Za-z0-9-_,\s]+\.json$/i)
      context.keys().forEach(key => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i)
        if (matched && matched.length > 1) {
          const locale = matched[1]
          this.locales.push(locale)
          this.localeData[locale] = context(key)
        }
      })
    },
    setLocale () {
      if (this.locales.length === 0) {
        this.locale = ''
      } else if (this.locales.includes(this.$i18n.locale)) {
        this.locale = this.$i18n.locale
      } else if (this.locales.includes(this.$i18n.fallbackLocale)) {
        this.locale = this.$i18n.fallbackLocale
      } else {
        this.locale = this.localeData[0]
      }
    },
    printWindow () {
      window.print()
    }
  },

  watch: {
    locale (val) {
      this.$i18n.locale = val
    }
  }
}
</script>

<style>
.printable {
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
}

.wrap-text {
  word-wrap: break-word;
}

.my-nav {
  align-self: center;
  text-align: center;
  font-size: 3rem;
  padding: 0;
  background-color: #6A76AB;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 5;
}

.my-nav .subheading {
  text-align: center;
  font-size: 1.15rem;
  padding-right: 5px;
}

.my-nav .locale-select {
  min-width: 110px;
  max-width: 120px;
}

.v-subheader {
  font-size: 1.5rem;
  color: #fff;
}
.theme--dark.v-subheader {
  color: #fff;
}

.v-list-item__icon {
  margin-right: 10px !important;
}

.v-list-item--three-line .wrap-text {
  -webkit-line-clamp: 3;
}

#print-btn {
  border-color: rgba(255, 255, 255, 0.27);
}

#print-btn:hover {
  border-color: rgba(255, 255, 255, 1);
}

#print-btn:hover::before {
  opacity: 0;
}

@media print {
  @page {
    margin: 0;
    padding: 0;
    size: A4;
  }
  /* html {
    height: 125%;
    width: 125%;

    transform: translate(-10%, -10%) scale(0.8, 0.8);
    -moz-transform: translate(-10%, -10%) scale(0.8, 0.8);
    -ms-transform: translate(-10%, -10%) scale(0.8, 0.8);
    -webkit-transform: translate(-10%, -10%) scale(0.8, 0.8);
    -o-transform: translate(-10%, -10%) scale(0.8, 0.8);
  } */

  .my-nav.elevation-5{
    box-shadow: none !important;
  }
  .v-application .my-card{
    box-shadow: none !important;
  }
}
</style>
