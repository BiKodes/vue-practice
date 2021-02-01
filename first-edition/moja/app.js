new Vue({
    el: '#vue-app',
    data: {
        name: 'Biko',
        job: 'Fighter'
    },
    methods: {
        greet: function(time){
            return 'Good' + time +' '+this.name;
        }
    }
});