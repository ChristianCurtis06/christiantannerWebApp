import { useContext } from "react";
import InteractionContext from "../context/InteractionContext";

const Introduction: React.FC = () => {
    const { interaction } = useContext(InteractionContext);

    return (
        <section id="introduction" className={interaction.isScrolled ? "scrolled" : ""}>
            <h2 className="section-header" id="introduction-header">Introduction</h2>
            <p>My name is <b>Christian Tanner Curtis</b>! Welcome to my personal portfolio! In this page, I will provide personal information about myself including education, career goals, and personal interests. In addition, I will outline my diversified work experience, project history, and skills. If you would like to talk with me, please visit the 'Contact Me' section. Thank you!</p>
        </section> 
    );
  };
  
  export default Introduction;