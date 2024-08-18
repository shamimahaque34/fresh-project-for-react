import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
export default function Nav(){
    return(
        <>
        
       
<nav className="navbar navbar-expand-lg navbar-light">
      
      <Link to="/" className="navbar-brand logo">
      <img src="assets/images/logo.png" alt="logo"/>
      </Link>

  <div className="collapse navbar-collapse menu" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li  className="nav-item" >
        <NavLink to="/"  className={({ isActive }) =>
                isActive ? "nav-link-active " : "nav-link "
              }>Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/about" className={({ isActive }) =>
                isActive ? "nav-link-active " : "nav-link "}>About</NavLink>
      </li>

      <li className="nav-item">
        <NavLink to="/service" className={({ isActive }) =>
                isActive ? "nav-link-active " : "nav-link "}>Service</NavLink>
      </li>

      <li className="nav-item">
        <NavLink to="/portfolio" className={({ isActive }) =>
                isActive ? "nav-link-active " : "nav-link "}>Portfolio</NavLink>
      </li>

      <li className="nav-item">
        <NavLink to="/contact" className={({ isActive }) =>
                isActive ? "nav-link-active " : "nav-link "}>Contact</NavLink>
      </li>
     
    </ul>
  </div>
</nav>


<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
    
   
  </>
  
);}


  