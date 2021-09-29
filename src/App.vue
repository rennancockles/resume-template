<template>
  <v-app class="printable">
    <v-main>
      <Resume :data="jsonData" language="pt"/>
    </v-main>
  </v-app>
</template>

<script>
import Resume from '@/components/Resume'
import json from './data/pt.json'

export default {
  name: 'App',

  components: {
    Resume
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
