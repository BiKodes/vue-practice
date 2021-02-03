<template>
  <div>
    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <app-gladiators v-bind:gladiators="gladiators"></app-gladiators>    
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Gladiators from './components/Gladiators';


export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-gladiators': Gladiators
  },
  data () {
    return {
       gladiators: [
                {name: 'Tango', speciality: 'Vue Components', show: false},
                {name: 'Alpha', speciality: 'HTML Wizardry', show: false},
                {name: 'Bravo', speciality: 'Click Events', show: false},
                {name: 'Delta', speciality: 'Conditionals', show: false},
                {name: 'Zulu', speciality: 'Webpack', show: false},
                {name: 'Lima', speciality: 'Data Diggin', show: false}
            ],
            title: "Akaunt Warriors"
    }
  },
  methods: {
    updateTitle: function(updatedTitle){
      this.title = updatedTitle;
    }
  }
}
</script>

<style>

</style>
