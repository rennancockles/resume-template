<template>
  <div id="resumePrint">
    <v-main>
      <v-container fluid class="pa-0">
        <v-row no-gutters class="my-nav white--text elevation-5">
          <v-col cols="8" class="mx-auto">
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
    </v-main>
  </div>
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

<style>
div#resumePrint .v-main {
  padding: 0 !important;
}
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
