import "../styles/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">

    <div className="logo">

  <img
    src="/logo.png"
    alt="Giri Signature Events"
  />

  <span>
    Giri Signature Events
  </span>

</div>
      <ul className="nav-links">

  <li><Link to="/">Home</Link></li>

  <li><Link to="/about">About</Link></li>

  <li><Link to="/services">Services</Link></li>

  <li><Link to="/gallery">Gallery</Link></li>

  <li><Link to="/contact">Contact</Link></li>

</ul>

    </header>
  );
}

export default Navbar;