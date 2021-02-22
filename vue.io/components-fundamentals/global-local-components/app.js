let planComponent = {

    template: '#plan-template',

    props: {
        name: {
            type: String,
            default: 'Biko',
            required: true  
        },
        price: Number     
    }
}


let planPickerComponent = {
    template: '#plan-picker-template',

    conponents: {
        plan: planComponent
    },
    data() {
        return {
            plans: ['The Single', 'The Curious', 'The Addict']
        }
    }
}



new Vue({
    el: '#app',

    components: {
        'plan-picker': planPickerComponent
    }
})



    