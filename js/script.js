new Vue({

    el : '#app',
    data : {
        musics : [],
        song : null,
        title :'',
        genre : '',
        singer : '',
        values: "",
        seen: true,
        filterSongs: 'ali'
        
    },
    methods :{
        findMusic: function () {
            this.seen = false
            const self = this
            axios.post('http://localhost:3000/musics/search', {
                value: this.values
              })
              .then(function (songs) {
                self.filterSongs = songs.data
              })
              .catch(function (err) {
                console.log(err)
              })
          },
        getData : function(){
            console.log(this.musics)
            axios.get('http://localhost:3000/musics/showallsong')
            .then(data=>{
                console.log(data)
                this.musics =data.data
                console.log(this.musics)
            })
            .catch(err => {
                console.log(err)
            })
        },
        submitFile: function(){
            var formData = new FormData()
            formData.append('image',this.song)
            console.log("ini form data",formData);
            console.log(this.song)

            let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViNTE2NGFkMjQ5NDBjMGMxZjZjNGZiMyIsIm5hbWUiOiJoYW5kaSIsImVtYWlsIjoiaGFuZGlAbWFpbC5jb20iLCJpYXQiOjE1MzIwNjkwMDB9.sjjXwbeT5itr9xHT8kuTK0R3R5UtMM2jV4OH85z00Vo'
            axios.post('http://localhost:3000/upload',formData)
            .then(result=>{
                console.log(result);
                console.log("berhasil")
                axios({
                    method: 'post',
                    url: 'http://localhost:3000/musics/addsong',
                    data: {
                        title:this.title,
                        genre: this.genre,
                        url:result.data.link,
                        singer: this.singer
                    },
                    headers : {
                        token : token
                    } 
                })
                .then(song=>{
                    console.log(song);
                })
                .catch(err=>{
                    console.log(err);
                    
                })
            })
            .catch(result=>{
                console.log("gagal");
            })
        
        },
        changeFile : function(data){
            console.log(data)
            this.song = data.target.files[0]
        },
         findMusic: function () {
      this.seen = false
      const self = this
      axios.post('http://localhost:3000/musics/search', {
          value: this.values
        })
        .then(function (songs) {

          self.filterSongs = songs.data
        })
        .catch(function (err) {
          console.log(err)
        })

    },
   
},
created(){
    this.getData()
}
})

    
