<template>
  <v-list-item
  three-line
  :href="phoneLink"
  target="_blank"
  v-if="phoneNumber"
  >
    <v-list-item-icon>
      <v-icon>mdi-cellphone</v-icon>
    </v-list-item-icon>

    <v-list-item-content>
      <v-list-item-title>{{ $t('phone') }}</v-list-item-title>
      <v-list-item-subtitle class="wrap-text" v-text="phoneNumber"></v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script>

export default {
  name: 'Phone',

  props: {
    phone: {
      type: [String, Object],
      default: ''
    }
  },

  computed: {
    phoneLink () {
      const phoneNum = this.onlyNum(this.phoneNumber)

      if (typeof this.phone === 'object' && this.phone.whatsapp) {
        return `https://wa.me/send?phone=${phoneNum.replace('+', '')}`
      } else {
        return `tel:${phoneNum}`
      }
    },
    phoneNumber () {
      if (typeof this.phone === 'string') {
        return this.phone
      } else if (typeof this.phone === 'object') {
        return this.phone.number
      } else {
        return ''
      }
    }
  },

  methods: {
    onlyNum: (value) => {
      if (!value) return ''
      value = value.toString()
      return value.replace(/[^\d+]/g, '')
    }
  }
}
</script>
