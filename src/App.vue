<template>
  <v-app class="printable">
    <v-main>
      <v-container fluid class="pa-0">
        <v-row no-gutters class="my-nav white--text elevation-5">
          <v-col cols="12">
            {{jsonData.name}}
            <div class="subheading">
              {{jsonData.title}}
            </div>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="3" class="grey darken-3">
            <Contact :data="jsonData.contact"/>
            <Languages :data="jsonData.languages"/>
            <Certifications :data="jsonData.certifications"/>
          </v-col>
          <v-col cols="9">
            <Summary :summary="jsonData.summary"/>
            <Education :data="jsonData.education"/>
            <WorkExperience :data="jsonData.workExperience"/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Contact from '@/components/sections/Contact'
import Languages from '@/components/sections/Languages'
import Certifications from '@/components/sections/Certifications'
import Summary from '@/components/sections/Summary'
import Education from '@/components/sections/Education'
import WorkExperience from '@/components/sections/WorkExperience'
import json from './data/pt.json'

export default {
  name: 'App',

  components: {
    Contact,
    Languages,
    Certifications,
    Summary,
    Education,
    WorkExperience
  },

  data: () => ({
    jsonData: json
  })
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
}

.my-nav .subheading {
  text-align: center;
  font-size: 1.15rem;
  padding-right: 5px;
}

.v-subheader {
  font-size: 1.5rem;
  color: #fff;
}
.theme--dark.v-subheader {
  color: #fff;
}

@media print {
  .my-nav.elevation-5{
    box-shadow: none !important;
  }
  .v-application .my-card{
    box-shadow: none !important;
  }
}
</style>
