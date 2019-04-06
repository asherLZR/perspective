Vue.component('subject-card', {
    data: function(){
        return {
        }
    },
    props: ['title', 'cardinfo'],
    template: '<div class="col s3"><div class="card blue-grey darken-1"><div class="card-content white-text"><span class="card-title">{{title}}</span><p>{{cardinfo}}</p></div><div class="card-action"><a href="#">This is a link</a></div></div></div>'
})

const vari = '<div class="card"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="images/office.jpg"></div><div class="card-content"><span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span><p><a href="#">This is a link</a></p></div><div class="card-reveal"><span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span><p>Here is some more information about this product that is only revealed once clicked on.</p></div></div>'


new Vue({
    el: "#app",
    data: {
        "subjectNames": ["Science", "IT", "Engineering", "Arts", "Math"]
    }
})

new Vue({
    el: "#unit",
    data: {
        "subjectName": "Science"
    }
})
  