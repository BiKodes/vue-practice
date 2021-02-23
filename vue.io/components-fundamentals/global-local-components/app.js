let planComponent = {

    template: '#plan-template',

    props: {
        name: {
            type: String,
            required: true  
        } ,
        
        selectedPlan: {
            type: String
        }
    },

    computed: {
        isSelected(){
            return this.name === this.selectedPlan
        }
    },


    methods: {
        select() {
            this.$emit('select', this.name)
            this.selected = true
        }
    }
}


let planPickerComponent = {
    template: '#plan-picker-template',

    components: {
        plan: planComponent
    },
    data() {
        return {
            plans: ['The Single', 'The Curious', 'The Addict'],
            selectedPlan: null
        }
    },

    methods: {
        selectedPlan(plan){
            this.selectedPlan = plan
        }
    }
}



new Vue({
    el: '#app',

    components: {
        'plan-picker': planPickerComponent
    }
})



    