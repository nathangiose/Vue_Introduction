// console.log("Nathan John Giose");
const app = Vue.createApp({
    //data, funtions, component templates
    data() {
        return{
            url : 'https://github.com/nathangiose',
            showBooks: true, //this is to show and hide the information
            books : [{
                title: 'Name of the wind',
                author: 'Patrick Rothfuss',
                img : 'assets/2021-08-10 (1).png',
                isFav: true
            },
            {
                title: 'The way of Kings',
                author: 'Brandon Sanderson',
                img : 'assets/2013-dodge-charger-r-t-dodge-charger-daytona-car-dodge-daytona-png-favpng-BjFtEpDFeMKpr7GJQJpsLLHNz_t.jpg',
                isFav: false
            },
            {
                title: 'The Final Empire',
            author: 'Brandon Sanderson',
            img : 'assets/2013-dodge-charger-se-used-car-price-png-favpng-u4hsDS0Y8rg5NHJXcHKTM4yW5_t.jpg',
            isFav: true
            }
        ],
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            img : 'assets/2021-08-10 (1).png',
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
        },
        toggleFav(book) {
            book.isFav = !book.isFav

        }
        
    }
})

app.mount('#app')