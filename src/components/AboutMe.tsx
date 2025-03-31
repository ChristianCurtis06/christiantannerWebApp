import { useContext } from "react";
import InteractionContext from "../context/InteractionContext";

const AboutMe: React.FC = () => {
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
        <section id="about-me">
            <h2 className="section-header" id="about-me-header">About Me</h2>

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
                    <h3>Background</h3>
                    <p>I grew up in southern California but now reside in the DFW area of northern Texas. Although I am a recent High School graduate, I have worked in various fields and industries both during my high school years and since earning my diploma.</p>
                </div>

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
                    <h3>Education</h3>
                    <ul>
                        <li><b>High School Diploma</b>, Graduated in May 2024 from <i>Our Legacy Academy (Homeschool)</i></li>
                        <li><b>Software Engineering Bootcamp</b>, Currently enrolled in a program provided by <i>Coding Temple</i></li>
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
                    <h3>Career Goals</h3>
                    <p>It is my goal to...</p>
                    <ul>
                        <li>...become a well-rounded designer and developer.</li>
                        <li>...collaborate with notable creative minds.</li>
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
                    <h3>Personal Interests</h3>
                    <ul>
                        <li>Jiu-Jitsu</li>
                        <li>Graphic Design</li>
                        <li>Weightlifting and Running</li>
                        <li>Character Illustration</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;