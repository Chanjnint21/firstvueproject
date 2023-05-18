<template>
  <div id="app">
    <HomeSection></HomeSection>
    <HelloWorld msg="Hello World !!"/>
  </div>
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
  }
}
</script>

