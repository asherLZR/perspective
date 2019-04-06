Vue.component('subject-card', {
    data: function(){
        return {
        }
    },
    props: ['title', 'cardinfo', 'imgfile'],
    template: '<div class="col s4"><a href="unit.html"><div class="card horizontal"><div class="card-image"><img :src="imgfile"></div><div class="card-stacked"><div class="card-content"><h6>{{title}}</h6></div></div></div></a></div>'
})

new Vue({
    el: "#app",
    data: {
        "subjectNames": ["Art, Design and Architecture", "Arts", "Business and Economics", "Education", "Engineering", "Information Technology", "Law", "Medicine, Nursing and Health Sciences", "Pharmacy and Pharmaceutical Sciences","Science"]
        }
    })

{/* <a href="#"><i class="material-icons">arrow_forward</i></a> */}
