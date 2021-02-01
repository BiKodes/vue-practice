new Vue({
    el: '#vue-app',
    data: {
        output: 'Your best tech company'
    },
    methods: {
      readRefs: function(){
          console.log(this.$refs.test.innerText);
          this.output = this.$refs.input.value;
      }  
    }
});