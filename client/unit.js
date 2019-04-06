fetch("/data/Science.json")
  .then(response => response.json())
  .then(json => {
      new Vue({
        el: "#unit",
        data: {
            "subjectName": "Science",
            "units": json
        }
    })
    });    

  Vue.component('unit-card',{
    props: ['title', 'subject'],
    template: '<li class="collection-item avatar"><i class="material-icons circle">video_library</i><span class="title">{{title}}</span><p>{{subject}}</p><a href="#!" class="secondary-content"><i class="star material-icons">grade</i></a></li>'
})