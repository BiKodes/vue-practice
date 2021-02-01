<template>
  <div>
    <h1>{{title}}</h1>
    <akaunts></akaunts>
  
    
  </div>
</template>

<script>
import Akaunts from './Akaunts.vue'

export default {
  components: {
    'akaunts': Akaunts
  },
  
  data () {
    return {
      title: 'Akaunt App'
    }
  }
 
}
</script>

<style scoped>
h1
{
  color: purple;
}
</style>
