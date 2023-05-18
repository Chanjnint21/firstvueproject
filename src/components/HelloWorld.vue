<template>
  <div class="hello">
    <h1>{{ msg  }}</h1>

    <h1 style="cursor: pointer;" @click="num++">{{ num }}</h1>
    <h1 style="cursor: pointer;" @click="num2++">{{ num2 }}</h1>
    <hr>
    <h1>{{ Sum }}</h1>
    <button v-on:click="clear">Clear</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  //props to pass the value
  props: {
    msg: String,
  },
  data(){
    return{
      num:0,
      num2: 0,
    }
  },
  watch: {
    num(newVal, oldVal) {
      console.log('Num1 changed from', oldVal, 'to', newVal);
    },
    num2(newVal, oldVal) {
      console.log('Num2 changed from', oldVal, 'to', newVal);
    },
  },
  computed: {
    Sum() {
      return this.num + this.num2;
    },
  },
  methods: {
    clear: function(){
      this.num = '0';
      this.num2 = '0';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
