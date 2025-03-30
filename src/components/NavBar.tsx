import { useContext } from "react";
import InteractionContext from "../context/InteractionContext";

const NavBar: React.FC = () => {
  const { interaction } = useContext(InteractionContext);

  return (
    <nav>
        <ul id="navigation-menu" className={interaction.isScrolled ? "scrolled" : ""}>
            <li><a href="#introduction">Introduction</a></li>
            <li><a href="#about-me">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact-me">Contact Me</a></li>
        </ul>
    </nav>
  );
};

export default NavBar;