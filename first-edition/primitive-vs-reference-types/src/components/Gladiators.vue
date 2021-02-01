<template>
   <div id="gladiators">

       <ul>
           <li v-for="gladiator in gladiators" v-on:click="gladiator.show = !gladiator.show">
               <h2>{{gladiator.name}}</h2>
               <h3 v-show="gladiator.show">{{gladiator.speciality}}</h3>
           </li>
       </ul>
       <button v-on:click="deleteGladiator">Delete Gladiator</button>
   </div>
</template>

<script>
export default {
  
//   props: ['gladiators'],

//   Validation
    props: {
        gladiators: {
            type: String,
            required: true
        }
    },
  data() {
      return {
          
      }
  },
  methods: {
      deleteGladiator(){
          this.gladiators.pop();
      }
  }
}
</script>

<style scoped>
  #gladiators
  {
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul
{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li
{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>

