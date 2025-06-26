import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import InteractionContext from "../context/InteractionContext";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const { interaction } = useContext(InteractionContext);

  return (
    <nav id="navbar">
      <button id="hamburger-menu" onClick={toggleMenu} aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`navbar-elements ${isMenuOpen ? "open" : ""} ${interaction.isScrolled ? "scrolled" : ""}`}>
        <img id="navbar-favicon" src="christiantanner_FAV-Transparent.png" alt="Christian Tanner Favicon" onClick={() => window.location.href = "/"} />
        {/*<li className="navbar-element"><a href="/#introduction">Introduction</a></li>*/}
        <li className="navbar-element"><a id="navbar-about-me" href="/#about-me">About</a></li>
        <li className="navbar-element"><a id="navbar-projects" href="/#projects">My Work</a></li>
        <li className="navbar-element"><a id="navbar-services" href="/#services">Services</a></li>
        <li className="navbar-element"><a id="navbar-pricing" href="/#pricing">Pricing</a></li>
        <li className="navbar-element" id="navbar-contact-element"><Link id="navbar-contact" to="/contact">Let's Talk</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;