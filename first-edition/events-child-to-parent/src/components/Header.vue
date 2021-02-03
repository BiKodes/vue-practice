<template>
    <header>
        <h1 v-on:click="changeTitle">{{ title }}</h1>
    </header>
</template>

<script>
import {bus} from "../main";

export default {
    props: {
        title: {
            type: String
        }
    },
  
  data() {
      return {
          title: 'Akaunting Wizards'
      }
  },
  methods: {
      changeTitle: function(){
       
        this.title = 'Akaunt Wizards';
        bus.$emit('titleChanged','Akaunt Wizards');
      }
  }
}
</script>

<style scoped>
    header
    {
        background: lightgreen;
        padding: 10px;
    }
    h1
    {
        color: #222;
        text-align: center;
    }
</style>

