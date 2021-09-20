<template>
  <v-app class="printable">
    <v-app-bar
      app
      dark
      clipped-left
      color="#6A76AB"
      prominent
    >
      <v-toolbar-title>
        Rennan Cockles
        <div class="subheading">
          Software Engineer / Data Engineer
        </div>
      </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      app
      dark
      clipped
      width=300
    >
      <Contact/>
      <Languages/>
      <Certifications/>
    </v-navigation-drawer>

    <v-main>
      <Summary/>
      <Education/>
      <WorkExperience/>
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
}

.wrap-text {
  word-wrap: break-word;
}

.v-toolbar--prominent .v-toolbar__content .v-toolbar__title {
  align-self: center;
  text-align: center;
  font-size: 3rem;
  padding: 0;
  margin: auto;
}

.v-toolbar--prominent .v-toolbar__content .v-toolbar__title .subheading{
  text-align: right;
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
</style>
