<template>
  <div>
    <h1>Vue To Do Projects.</h1>
   <ul>
     <li v-for="akaunt in akaunts">{{akaunt}}</li>
   </ul>
  </div>
    
</template>

<script>
export default {
  
  data () {
    return {
      akaunts: ['Silver','Bronze','Gold','Platinum']
    }
  }
 
}
</script>

<style scoped>

h1
{
  color: green;
}
</style>
