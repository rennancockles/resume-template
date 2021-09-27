<template>
  <v-app class="printable">
    <v-main>
      <v-container fluid class="pa-0">
        <v-row no-gutters class="my-nav white--text elevation-5">
          <v-col cols="12">
            Rennan Cockles
            <div class="subheading">
              Software Engineer / Data Engineer
            </div>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="3" class="grey darken-3">
            <Contact/>
            <Languages/>
            <Certifications/>
          </v-col>
          <v-col cols="9">
            <Summary/>
            <Education/>
            <WorkExperience/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Contact from './components/Contact'
import Languages from './components/Languages'
import Certifications from './components/Certifications'
import Summary from './components/Summary'
import Education from './components/Education'
import WorkExperience from './components/WorkExperience'

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
    //
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
}
</style>
