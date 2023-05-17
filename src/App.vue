<template>
  <div id="app">
    <HomeSection></HomeSection>
    <HelloWorld msg="Hello World !!"/>
  </div>
</template>

<script>
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
