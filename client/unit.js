let filename  = document.getElementById('subject-header').innerHTML;
fetch("/data/" + filename + ".json")
  .then(response => response.json())
  .then(json => {
      new Vue({
        el: "#unit",
        data: {
            "units": json
        }
    })
    });    

  Vue.component('unit-card',{
    props: ['title', 'subject'],
    template: '<li class="collection-item avatar"><i class="material-icons circle">video_library</i><span class="title">{{title}}</span><p>{{subject}}</p><a href="#!" class="secondary-content"><i class="star material-icons">grade</i></a></li>'
})