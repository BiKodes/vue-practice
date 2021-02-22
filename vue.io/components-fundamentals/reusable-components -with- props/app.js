Vue.component('plan',{

    template: '#plan-template',
    // props: ['name']

    props: {
        name: {
            type: String,
            default: 'Biko',
            required: true  
        },
        price: Number     
    }
})

new Vue({
    el: '#app',

    data: {
        plans: ['The Single', 'The Curious', 'The Addict']
    }
})



    