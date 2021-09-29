<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters class="my-nav white--text elevation-5">
      <v-col cols="12">
        {{data.name}}
        <div class="subheading">
          {{data.title}}
        </div>
      </v-col>
    </v-row>
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
  </v-container>
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
    },
    language: {
      type: String,
      default: 'pt'
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
