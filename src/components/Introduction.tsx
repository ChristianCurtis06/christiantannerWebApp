import { useContext } from "react";
import InteractionContext from "../context/InteractionContext";

const Introduction: React.FC = () => {
    const { interaction } = useContext(InteractionContext);

    return (
        <section id="introduction" className={interaction.isScrolled ? "scrolled" : ""}>
            <h2 className="section-header" id="introduction-header">Introduction</h2>
            <p id="introduction-text">Hey, I'm <b>Christian Tanner Curtis</b>! I am a dynamic front-end developer with experience in the creative marketplace, offering website development services. I am adept at integrating a diverse skillset to serve the consumer and offer user-focused solutions. In addition to my technical skills, I am a collaborative team player with proven expertise and a passion for learning and adapting to fast-paced environments.</p>
        </section> 
    );
  };
  
  export default Introduction;