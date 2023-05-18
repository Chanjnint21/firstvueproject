<template>
  <v-container>
      <h1>{{ msg  }}</h1>

    <h1 style="cursor: pointer;" @click="num++">{{ num }}</h1>
    <h1 style="cursor: pointer;" @click="num2++">{{ num2 }}</h1>
    <hr>
    <h1>{{ Sum }}</h1>
    <v-btn v-on:click="clear"
  color="primary"
  elevation="2"
  outlined
  plain
  raised
>reset the Process</v-btn>
  </v-container>
</template>

<script>
  export default {
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
