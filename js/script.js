new Vue({
  el: '#app',
  data: {
    musics: [
      {
        title: 'Best Part',
        artist: 'Daniel Caesaar',
        category: 'rock'

            }, {
        title: 'Let me',
        artist: 'zayn',
        category: 'rock'
            }, {
        title: 'Let me',
        artist: 'zayn',
        category: 'rock'
            }, {
        title: 'Let me',
        artist: 'zayn',
        category: 'rock'
            }, {
        title: 'Let me',
        artist: 'zayn',
        category: 'rock'
            }
        ],
    values: "",
    seen: true,
    filterSongs: 'ali'
  },
  methods: {

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

    }

  }
})
