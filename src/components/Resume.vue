<template>
  <div id="resume">
    <v-app-bar
      app
      dark
      clipped-left
      prominent
      color="#6A76AB"
    >
      <v-app-bar-nav-icon
      @click.stop="showDrawer = !showDrawer"
      class="hidden-md-and-up d-print-none"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <v-toolbar-title>
        Rennan Cockles
        <div class="subheading">
          Software Engineer / Data Engineer
        </div>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu
        open-on-hover
        transition="slide-y-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            id="btn-menu"
            icon
            v-bind="attrs"
            v-on="on"
            class="d-print-none"
          >
            <v-icon>mdi-translate</v-icon>
            <span v-text="activeLocale"></span>
          </v-btn>
        </template>

        <v-list>
          <v-list-item-group
            v-model="selectedItem"
            color="info"
          >
            <v-list-item
              v-for="locale in locales"
              :key="locale"
              @click="changeLocale(locale)"
            >
              <v-list-item-title v-text="locale"></v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>

      <v-btn icon @click="print" class="d-print-none">
        <v-icon>mdi-printer-outline</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      fixed
      clipped
      v-model="showDrawer"
      :temporary="$vuetify.breakpoint.smAndDown"
      :permanent="$vuetify.breakpoint.mdAndUp"
      app
      >
      <Contact :data="data.contact"/>
      <Languages :data="data.languages"/>
      <Certifications :data="data.certifications"/>
    </v-navigation-drawer>

    <v-main>
      <Summary :summary="data.summary"/>
      <Education :data="data.education"/>
      <WorkExperience :data="data.workExperience"/>
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
  name: 'Resume',

  props: {
    data: {
      type: Object,
      default: function () {
        return {}
      }
    },

    locales: {
      type: Array,
      default: function () {
        return []
      }
    },

    activeLocale: {
      type: String,
      default: ''
    }
  },

  components: {
    Contact,
    Languages,
    Certifications,
    Summary,
    Education,
    WorkExperience
  },

  data: () => ({
    selectedItem: null,
    showDrawer: false
  }),

  created () {
    this.selectedItem = this.locales.indexOf(this.activeLocale)
  },

  methods: {
    changeLocale (locale) {
      this.$emit('changeLocale', locale)
    },
    print () {
      this.$emit('print')
    }
  }
}
</script>

<style>
#resume .v-toolbar--prominent .v-toolbar__title {
  text-align: center;
  font-size: min(6vw, 2.5rem);
}
#resume .v-toolbar--prominent .v-toolbar__title .subheading {
  font-size: min(3.5vw, 1.5rem);
}
#btn-menu .v-btn__content {
  flex-direction: column;
  align-items: end;
}
#btn-menu .v-btn__content > span {
  font-size: 0.5rem;
}

.v-list-item--three-line .wrap-text {
  -webkit-line-clamp: 3;
}

.wrap-text {
  word-wrap: break-word;
}

.v-subheader {
  font-size: 1.5rem;
}
.theme--dark.v-subheader {
  color: #fff;
}

.v-list-item__icon {
  margin-right: 10px !important;
}
</style>
