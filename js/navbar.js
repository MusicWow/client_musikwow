Vue.component('navbar',{
    template : ` 
    <div>
    <nav class="white" role="navigation">

    <ul class="dropdown-content" id="comp-menu3">
        <li><a href="#">Profile</a></li>
        <li><a href="#">Log out</a></li>
      </ul>
  <div class="nav-wrapper container">
    <a id="logo-container" href="http://127.0.0.1:8080/home.html" class="brand-logo">Music WoW</a>
    <ul class="right hide-on-med-and-down">
      <li><a href="#">Navbar Link</a></li>
      <li><a href="http://127.0.0.1:8080/form-upload.html">Upload</a></li>
      <li><a href="#" data-target="comp-menu3" class="dropdown-button">Account</a></li>
    </ul>
  
    <ul id="nav-mobile" class="sidenav">
      <li><a href="#">Navbar Link</a></li>
    </ul>
    <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
  </div>
  </nav>
  </div>`
})