let regist = new Vue({
  el: "#regist",
  data: {
    seen: true,
    name: '',
    password: '',
    email: '',
    email1: '',
    password1: ''

  },
  methods: {
    register: function () {
      console.log('daftar')
      axios.post('http://localhost:3000/signup', {
          name: this.name,
          password: this.password,
          email: this.email,


        })
        .then(function (data) {
          console.log(data)
          localStorage.setItem('tokenmusic', data.data.token)
          // window.location.href = 'http://localhost:3000/home.html'
        })
        .catch(function (err) {
          console.log(err)
        })

    },
    login: function () {
      console.log('login')
      axios.post('http://localhost:3000/signin', {

          password: this.password1,
          email: this.email1
        })
        .then(function (registerdata) {
          console.log(registerdata)

          if (registerdata) {
            window.location.href = 'http://127.0.0.1:8080/home.html'
          }




        })
        .catch(function (err) {
          console.log(err)
        })
    }


  }
})
