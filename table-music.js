Vue.component('list-music',{
    template : `
        <table class="centered">
            <thead>
                <tr>
                <th></th>
                <th>Title</th>
                <th>Artist</th>
                <th>Category</th>
                <th>Share</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="music in musics">
                    <td>
                        <audio controls> 
                            <source v-bind:src="music.url" type="audio/mpeg">
                          Your browser does not support the audio element.
                        </audio> 
                    </td>
                    <td>
                    {{music.title}}
                    </td>
                    <td>{{music.singer}} </td>
                    <td>{{music.genre}}</td>
                    <td><i class="fab fa-twitter"></i></td>
                </tr>
            </tbody>
        </table>
    `,
    props :['musics']
})