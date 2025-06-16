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
      <button id="hamburger-menu" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`navbar-elements ${isMenuOpen ? "open" : ""} ${interaction.isScrolled ? "scrolled" : ""}`}>
        <img id="navbar-favicon" src="christiantanner_FAV-Transparent.png" alt="Christian Tanner Favicon" onClick={() => window.location.href = "/"} />
        <li className="navbar-element"><a href="/#introduction">Introduction</a></li>
        <li className="navbar-element"><a id="navbar-about-me" href="/#about-me">About</a></li>
        <li className="navbar-element"><a id="navbar-projects" href="/#projects">Projects</a></li>
        <li className="navbar-element"><a id="navbar-skills" href="/#skills">Skills</a></li>
        <li className="navbar-element"><Link id="navbar-contact-me" to="/contact">Let's Chat</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;