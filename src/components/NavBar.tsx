import { useContext } from "react";
import InteractionContext from "../context/InteractionContext";

const NavBar: React.FC = () => {
  const { interaction } = useContext(InteractionContext);

  return (
    <nav>

      <ul id="navbar" className={interaction.isScrolled ? "scrolled" : ""}>
        <img src="CC_Signature-white.png" alt="Christian Tanner Favicon" id="navbar-favicon" onClick={() => window.location.href = "/"} />
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