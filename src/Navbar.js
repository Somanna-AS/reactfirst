import Home from './Home';
import Register from './Register';
import Login from './Login';
import Main from './Main';
import {Routes,Route} from 'react-router-dom'

function Navbar() {
  return (
    <div className="nav" >
      <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Register">Register</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Login">Login</a>
        </li>
        <li class="nav-item dropdown">
          
        </li>
      </ul>
    </div>
  </div>
</nav>
      
    </div>
  );
}

export default Navbar;
