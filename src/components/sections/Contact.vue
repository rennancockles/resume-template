<template>
  <v-list
  v-if="anyField"
  class="grey darken-3"
  dark
  >
    <v-subheader>{{ $t('contact') }}</v-subheader>

    <Address :address="data.address"/>
    <Phone :phone="data.phone"/>
    <Email :email="data.email"/>
    <Site :url="data.site"/>
    <Linkedin :url="data.linkedin"/>
    <Github :url="data.github"/>

  </v-list>
</template>

<script>
import Address from '@/components/contact/Address'
import Phone from '@/components/contact/Phone'
import Email from '@/components/contact/Email'
import Linkedin from '@/components/contact/Linkedin'
import Github from '@/components/contact/Github'
import Site from '@/components/contact/Site'

export default {
  name: 'Contact',

  props: {
    data: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },

  components: {
    Address,
    Phone,
    Email,
    Linkedin,
    Github,
    Site
  },

  computed: {
    anyField () {
      return Object.values(this.data).some(el => el)
    }
  }
}
</script>
