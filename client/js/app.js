Vue.component('subject-card', {
    data: function(){
        return {
        }
    },
    props: ['title', 'cardinfo', 'imgfile', 'url'],
    template: '<div class="col s4"><a :href="url"><div class="card horizontal" :style="imgfile"><div class="card-stacked"><div class="card-content"><h6>{{title}}</h6></div></div></div></a></div>'
})

new Vue({
    el: "#app",
    data: {
        "subjects": [{
            name: "Arts",
            img: "background-image: url('/assets/arts.jpg');",
            url: "/units/arts"
        },{
            name: "Business and Economics",
            img: "background-image: url('/assets/business.jpg');",
            url: "/units/business"
        },
        {
            name: "Education",
            img: "background-image: url('/assets/education.jpg');",
            url: "/units/education"
        }],
        "subjects_1": [{
                name: "Engineering",
                img: "background-image: url('/assets/engineering.jpg');",
                url: "/units/engineering"
            },{
                name: "Information Technology",
                img: "background-image: url('/assets/informationTechnology.jpg');",
                url: "/units/it"
            },
            {
                name: "Science",
                img: "background-image: url('/assets/science.jpg');",
                url: "/units/science"
            }]
        }
    })

{/* <a href="#"><i class="material-icons">arrow_forward</i></a> */}
