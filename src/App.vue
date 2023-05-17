<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <HomeSection/>
    <HelloWorld msg="Hello World !!"/>
  </div>
</template>

<script>
//local Registration
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
