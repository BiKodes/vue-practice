Vue.component('greeting', {
    template: '<p>Hey there, I am a {{name}}.<button v-on:click="changeName">Change Name</button></p>',
    data: function(){
        return {
            name: 'Biko'
        }
    },
    methods: {
        changeName: function(){
            this.name = 'Bantu';
        }
    }
});

new Vue({
    el: '#vue-app-one',
  
});

new Vue({
    el: '#vue-app-two',
  
});