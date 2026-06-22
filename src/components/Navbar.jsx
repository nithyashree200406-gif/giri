import "../styles/navbar.css";

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
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </nav>


    </header>
  );
}

export default Navbar;