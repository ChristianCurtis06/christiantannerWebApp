import { useContext } from "react";
import InteractionContext from "../context/InteractionContext";

const Skills: React.FC = () => {
    const { interaction, setInteraction } = useContext(InteractionContext);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>, id: string) => {
        const { offsetX, offsetY } = event.nativeEvent;
        setInteraction((prevInteraction) => ({
            ...prevInteraction,
            mouseX: offsetX,
            mouseY: offsetY,
            hoveredElement: id,
        }));
    };

    const handleMouseEnter = (id: string) => {
        setInteraction((prevInteraction) => ({
            ...prevInteraction,
            isHovering: true,
            hoveredElement: id,
        }));
    };

    const handleMouseLeave = () => {
        setInteraction((prevInteraction) => ({
            ...prevInteraction,
            isHovering: false,
            hoveredElement: "",
        }));
    };

    return (
        
        <section id="skills">
            <h2 className="section-header" id="skills-header">Skills</h2>

            <div className="content-grid">
                <div
                    onMouseMove={(e) => handleMouseMove(e, "background")}
                    onMouseEnter={() => handleMouseEnter("background")}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        background: interaction.isHovering && interaction.hoveredElement === "background"
                        ? `radial-gradient(circle at ${interaction.mouseX}px ${interaction.mouseY}px, rgba(83, 83, 83, 0.2) 0%, rgba(22, 22, 22, 1)) 50%`
                        : "rgba(22, 22, 22, 1)",
                    }}
                >
                    <h3>Graphic Design</h3>
                    <ul>
                        <li>Adobe Illustrator</li>
                        <li>Adobe Photoshop</li>
                    </ul>                </div>

                <div
                    onMouseMove={(e) => handleMouseMove(e, "education")}
                    onMouseEnter={() => handleMouseEnter("education")}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        background: interaction.isHovering && interaction.hoveredElement === "education"
                        ? `radial-gradient(circle at ${interaction.mouseX}px ${interaction.mouseY}px, rgba(83, 83, 83, 0.2) 0%, rgba(22, 22, 22, 1)) 50%`
                        : "rgba(22, 22, 22, 1)",
                    }}
                >
                    <h3>Video Editing</h3>
                    <ul>
                        <li>Adobe Premiere Pro</li>
                        <li>Adobe Premiere Rush</li>
                    </ul>
                </div>

                <div
                    onMouseMove={(e) => handleMouseMove(e, "career")}
                    onMouseEnter={() => handleMouseEnter("career")}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        background: interaction.isHovering && interaction.hoveredElement === "career"
                        ? `radial-gradient(circle at ${interaction.mouseX}px ${interaction.mouseY}px, rgba(83, 83, 83, 0.2) 0%, rgba(22, 22, 22, 1)) 50%`
                        : "rgba(22, 22, 22, 1)",
                    }}
                >
                    <h3>Software Development</h3>
                    <ul>
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>React</li>
                    </ul>
                </div>

                <div
                    onMouseMove={(e) => handleMouseMove(e, "interests")}
                    onMouseEnter={() => handleMouseEnter("interests")}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        background: interaction.isHovering && interaction.hoveredElement === "interests"
                        ? `radial-gradient(circle at ${interaction.mouseX}px ${interaction.mouseY}px, rgba(83, 83, 83, 0.2) 0%, rgba(22, 22, 22, 1)) 50%`
                        : "rgba(22, 22, 22, 1)",
                    }}
                >
                    <h3>Website Development</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                        <li>Wordpress</li>
                    </ul>
                </div>
            </div>
        </section>
    );
  };
  
  export default Skills;