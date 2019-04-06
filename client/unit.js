Vue.component('unit-card',{
    props: ['title', 'subject'],
    template: '<li class="collection-item avatar"><i class="material-icons circle">video_library</i><span class="title">{{title}}</span><p>{{subject}}</p><a href="#!" class="secondary-content"><i class="star material-icons">grade</i></a></li>'
})

new Vue({
    el: "#unit",
    data: {
        "subjectName": "Science",
        "units": {"AMG5018": "Celebrity, fashion, publicity", "AMG5382": "Contemporary issues in Asia", "AMG5400": "Global digital media: Issues in international and transnational communication", "AMG5409": "Communication research", "AMG5742": "Communications research project", "AMG5743": "Communications research thesis", "AMG5751": "Communications industry internship", "AMG5894": "Communications theories and practices", "AMU1017": "Academic literacies", "AMU1018": "Learning in higher education", "AMU1277": "Media studies", "AMU1278": "Communication technologies and practices", "AMU1304": "Television studies: Forms and approaches", "AMU1305": "Film studies: Forms and approaches", "AMU1309": "Introduction to sexuality studies", "AMU1310": "Introduction to gender studies", "AMU1312": "Introduction to creative writing", "AMU1314": "Writing techniques: Forms and literary devices", "AMU1325": "Introduction to world politics and history", "AMU1326": "Transformation from above: Globalisation and the state"}
    }
})