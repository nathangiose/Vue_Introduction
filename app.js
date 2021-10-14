// console.log("Nathan John Giose");
const app = Vue.createApp({
    //data, funtions, component templates
    data() {
        return{
            showBooks: true, //this is to show and hide the information
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45,
            x: 0,
            y: 0

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
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
        
    }
})

app.mount('#app')