<template>
  <div>
    <app-header></app-header>
    <app-gladiators></app-gladiators>
    <app-footer></app-footer>
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

    }
  }
}
</script>

<style>

</style>
