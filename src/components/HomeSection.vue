<template>
    <div class="header"> 
        <div><h1>This is home Section !!</h1>
        <input v-model="name" placeholder="Type your name...">
        <p>Welcome {{ name }} !</p>
    </div>
    </div>
</template>

<script lang="ts">
export default {
    data() {
    return{
      name,
    }
  }
}
</script>

<style>
.header{
    background: black;
    width: 100%;
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
}
</style>