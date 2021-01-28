new Vue({
    el: '#vue-app',
    data: {
        name: 'Biko',
        job: 'Fighter',
        website: 'https://www.vueschool.io',
        websiteTag: '<a href="https://www.vueschool.io">Get Vue Tutor</a>'
    },
    methods: {
        greet: function(time){
            return 'Good' + time +' '+this.name;
        }
    }
});