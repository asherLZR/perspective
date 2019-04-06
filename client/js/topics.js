new Vue({
    el: "#app",
    data: {
        topics: ["Units and Measurements", "The Scientific Process","The Big Bang, Elements and Radiation", 
        "Discovery of the Galaxy and the Vastness of Space", "Age and Origin of the Solar System",
        "Methods of Observational Astronomy", "The Life-Giving Sun -The Electromagnetic Spectrum",
        "Planets of the Solar System", "The Earth in Space"],
        random: function(){
            return Math.floor(Math.random()*20)+3
        }
    }
})