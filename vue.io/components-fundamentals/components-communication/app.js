let planComponent = {

    template: '#plan-template',

    props: {
        name: {
            type: String,
            default: 'Biko',
            required: true  
        }   
    },

    // data() {
    //     return {
    //         selected: false
    //     }
    // },
    // methods: {
    //     selected() {
    //         this.selected = true
    //     }
    // }
}


let planPickerComponent = {
    template: '#plan-picker-template',

    components: {
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



    