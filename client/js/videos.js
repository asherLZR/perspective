const BASEURL = 'https://www.googleapis.com/youtube/v3';
const KEY = 'AIzaSyAGl3znQ0pUmO2_dGSvlEfYgTbosLx_PDA';

new Vue({
    el: '#app',
    data () {
        return {
            videos: [],
            selectedVideo: null,
            topic: "ASP2011 - Astronomy: Age and Origin of the Solar System",
            comments: [
                {
                    username: "Sally Yik",
                    comment: "Astrobiology is a multidisciplinary field related to the sciences of Astronomy, Chemistry, Biology and Geology.",
                    img: "url('/assets/happy1.jpg')"
                },{
                    username: "Peaker Guo",
                    comment: "Milankovitch periodicities of 123 kyr (eccentricity), 35.6 kyr (obliquity), and 21.2 kyr (precession) were identified in geophysical logs of three Late Permian coals.",
                    img: "url('/assets/happy3.jpg')"
                }
            ]
        }
    },
    computed: {
        videoSrc: function() {
            return "https://www.youtube.com/embed/" + this.selectedVideo.id.videoId;
        }
    },

    mounted () {
        axios.get(BASEURL + '/search', {
            params: {
                part: 'snippet',
                maxResult: 5,
                key: KEY,
                q: "astronomy videos"
            }
        })
        .then(response => {
            this.videos = response.data.items;
            this.selectedVideo = response.data.items[2];
        });
    }
})


Vue.component('video-li', {
    data: function () {
      return {

      }
    },
    props: ['video'],
    template: '<li><div class="ind-vid" style="cursor: pointer"><img :src="video"/></img></div></li>'
})

Vue.component('comment-card',{
    props: ['title', 'subject', 'img'],
    template: '<li class="collection-item avatar"><img :style="{backgroundImage: img}" class="circle"></img><span class="title">{{title}}</span><p>{{subject}}</p><a href="#!" class="secondary-content"></a></li>'
})

  