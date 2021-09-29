<template>
  <v-row no-gutters>
    <v-col cols="3" class="grey darken-3">
      <Contact :data="data.contact"/>
      <Languages :data="data.languages"/>
      <Certifications :data="data.certifications"/>
    </v-col>
    <v-col cols="9">
      <Summary :summary="data.summary"/>
      <Education :data="data.education"/>
      <WorkExperience :data="data.workExperience"/>
    </v-col>
  </v-row>
</template>

<script>
import Contact from '@/components/sections/Contact'
import Languages from '@/components/sections/Languages'
import Certifications from '@/components/sections/Certifications'
import Summary from '@/components/sections/Summary'
import Education from '@/components/sections/Education'
import WorkExperience from '@/components/sections/WorkExperience'

export default {
  name: 'App',

  props: {
    data: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },

  components: {
    Contact,
    Languages,
    Certifications,
    Summary,
    Education,
    WorkExperience
  }
}
</script>
