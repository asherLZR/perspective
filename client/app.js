Vue.component('subject-card', {
    data: function(){
        return {
        }
    },
    props: ['title', 'cardinfo', 'imgfile', 'url'],
    template: '<div class="col s4"><a :href="url"><div class="card horizontal"><div class="card-image"><img :src="imgfile"></div><div class="card-stacked"><div class="card-content"><h6>{{title}}</h6></div></div></div></a></div>'
})

new Vue({
    el: "#app",
    data: {
        "subjects": [{
            name: "Arts",
            img: "assets/download-s.jpg",
            url: "/units/arts"
        },{
            name: "Business and Economics",
            img: "assets/download-s.jpg",
            url: "/units/business"
        },
        {
            name: "Education",
            img: "assets/download-s.jpg",
            url: "/units/education"
        },
        {
            name: "Engineering",
            img: "assets/download-s.jpg",
            url: "/units/engineering"
        },{
            name: "Information Technology",
            img: "assets/download-s.jpg",
            url: "/units/it"
        },
        {
            name: "Science",
            img: "assets/download-s.jpg",
            url: "/units/science"
        }]
        }
    })

{/* <a href="#"><i class="material-icons">arrow_forward</i></a> */}
