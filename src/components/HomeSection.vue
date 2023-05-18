<template>
    <div class="header"> 
        <div><h1>CLICK BELOW</h1>
          <v-text-field class='name' color="white" v-model="name"
            label="Type Your Name here"
          ></v-text-field>
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
