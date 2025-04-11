import { useContext, useState } from "react";
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
        <img id="navbar-favicon" src="CC_Signature-white.png" alt="Christian Tanner Favicon" onClick={() => window.location.href = "/"} />
        <li className="navbar-element"><a href="#introduction">Introduction</a></li>
        <li className="navbar-element"><a id="navbar-about-me" href="#about-me">About Me</a></li>
        <li className="navbar-element"><a id="navbar-projects" href="#projects">Projects</a></li>
        <li className="navbar-element"><a id="navbar-skills" href="#skills">Skills</a></li>
        <li className="navbar-element"><a id="navbar-contact-me" href="#contact-me">Contact Me</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;