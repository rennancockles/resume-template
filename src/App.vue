<template>
  <v-app class="printable">
    <Resume
      :data="jsonData"
      :locales="locales"
      :activeLocale="locale"
      @changeLocale="changeLocale"
      @print="print"
    />
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
        if (matched && matched.length > 1 && matched[1] !== 'template') {
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
    changeLocale (value) {
      this.locale = value
    },
    print () {
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
