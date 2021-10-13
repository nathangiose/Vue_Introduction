// console.log("Nathan John Giose");
const app = Vue.createApp({
    //data, funtions, component templates
    data() {
        return{
            showBooks: true, //this is to show and hide the information
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
           
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks //this toggles it from true to false and vice
        }
        
    }
})

app.mount('#app')