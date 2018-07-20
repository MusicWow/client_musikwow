let Youtube = new Vue({
  el: "#youtubes",
  data: {
    result: [],
    querys: ""

  },
  methods: {
    searching: function () {
      gapi.client.setApiKey('AIzaSyB2-dtfzmC6u_WzcaZPqh0k9Z_CLXaTQBI');
      gapi.client.load('youtube', 'v3', function () {
        Youtube.getVideo();
      });
    },


    getVideo: function () {
      $('#results').empty()
      var q = this.querys //$('#query').val();
      var request = gapi.client.youtube.search.list({
        q: q,
        part: 'snippet',
        maxResults: 9
      });

      request.execute(function (response) {
        console.log(response.items)
        console.log('?')
        for (let i = 0; i < response.items.length; i++) {
          Youtube.result.push(response.items[i])
          console.log(Youtube.result)
        }
      })
    }
  }
})
