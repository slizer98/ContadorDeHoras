new Vue({
    el: '#app',
    
    data () {
      return {
          title:"",
          time: 0,
          courses: []
      }
    },
    
    computed: {
        totalTime(){
            let suma = 0;
            let listCourse = this.courses;
            for (let i = 0; i< listCourse.length; i++){
                var time = listCourse[i].time;
                suma += time;

            }
            return suma;
        }
    },
    
    methods: {
        addCourse(){
                this.courses.push({title:this.title, time:this.time });
                this.title = "";
                this.time = 0;
        }
    }
  })