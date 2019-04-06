const BASEURL = 'https://www.googleapis.com/youtube/v3';
const KEY = 'AIzaSyAGl3znQ0pUmO2_dGSvlEfYgTbosLx_PDA';

new Vue({
    el: '#app',
    data () {
        return {
            videos: [],
            selectedVideo: null
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
                q: "astronomy"
            }
        })
        .then(response => {
            this.videos = response.data.items;
            this.selectedVideo = response.data.items[2];
        });

        console.log(this.videos);
    }



})


Vue.component('video-li', {
    data: function () {
      return {

      }
    },
    props: ['video'],
    template: '<li><div><img :src="video" /></div></li>'
})


  