import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Styles/main.css";

function NavBar() {
  const navRef = useRef(null);
  const location = useLocation();
  const showNavBar = () => {
    if (navRef.current) {
      navRef.current.classList.toggle("responsive_nav");
    }
  };
  const isHomePage = location.pathname === '/';

  if (isHomePage) {
    return null;
  }

  return (
    <header>
      <img
          src="./Images/name-logo.gif"
          alt="Name Logo"
          style={{ width: '20%', height: '100%', objectFit: 'cover' }}
          draggable="false"
      />
      <nav ref={navRef}>
        <Link to="/" onClick={showNavBar} style = {{fontFamily: 'fantasy'}}>Home</Link>
        <Link to="/about" onClick={showNavBar} style = {{fontFamily: 'fantasy'}}>About</Link>
        <Link to="/food" onClick={showNavBar} style = {{fontFamily: 'fantasy'}}>Food</Link>
        <Link to="/vacation" onClick={showNavBar} style = {{fontFamily: 'fantasy'}}>Vacation</Link>
        <a href="https://docs.google.com/document/d/15o5VrBwSea3Ljpqp3b1EvyTox69_-DTD/edit" style = {{fontFamily: 'fantasy'}}>Resume</a>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
}

export default NavBar;
