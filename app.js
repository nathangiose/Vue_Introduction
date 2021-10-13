// console.log("Nathan John Giose");
const app = Vue.createApp({
    //data, funtions, component templates
    data() {
        return{
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45

        }
    },
    //Changing the book title 
    methods: {
        changeTitle(title) {
            // console.log("You clicked me")
            // this.title = 'Words of Radiance'
            this.title = title
        }
    }
})

app.mount('#app')