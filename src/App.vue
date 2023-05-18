<template>
  <v-app>
    <v-main>
      <HomeSection/>
      <HelloWorld msg="Hello World!!"/>
    </v-main>
  </v-app>
</template>

<script>
import './assets/css/styles.css'
import HelloWorld from './components/HelloWorld.vue'
import HomeSection from './components/HomeSection.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    HomeSection
  },

  data: () => ({
    //
  }),
};
</script>
