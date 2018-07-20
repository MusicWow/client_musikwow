Vue.component('list-music',{
    template : `  
      <tr>
          <td> {{music.title}}</td>
          <td> {{music.artist}}</td>
          <td> {{music.category}}</td> 
      </tr>
 `,
    props :['music']
})