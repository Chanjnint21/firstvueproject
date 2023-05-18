<template>
    <div class="header"> 
        <div><h1>This is home Section !!</h1>
        <input v-model="name" placeholder="Type your name...">
        <p>Welcome {{ name }} !</p>
    </div>
    </div>
</template>

<script lang="ts">
import '../assets/css/styles.css'
export default {
    data() {
    return{
      name: '',
    }
  }
}
</script>
