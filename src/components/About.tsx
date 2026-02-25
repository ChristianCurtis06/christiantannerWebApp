import { useContext } from "react";
import InteractionContext from "../context/InteractionContext";

const About: React.FC = () => {
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
            <h2 className="section-header" id="about-me-header">Get to Know Me</h2>

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
                    className="content-card"
                    id="background-about-me"
                    >
                    <h3 className="card-header">Background</h3>
                    <p>As an entrepreneur at heart, I have a passion for helping small businesses thrive in an age of technological advancement. By offering creative solutions and strategic guidance, I help businesses establish a strong online presence and achieve their goals.</p>
                </div>

                <div
                    onMouseMove={(e) => handleMouseMove(e, "accreditations")}
                    onMouseEnter={() => handleMouseEnter("accreditations")}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        background: interaction.isHovering && interaction.hoveredElement === "accreditations"
                        ? `radial-gradient(circle at ${interaction.mouseX}px ${interaction.mouseY}px, rgba(83, 83, 83, 0.2) 0%, rgba(22, 22, 22, 1)) 50%`
                        : "rgba(22, 22, 22, 1)",
                    }}
                    className="content-card"
                    id="education-about-me"
                    >
                    <h3 className="card-header">Accreditations</h3>
                    <ul>
                        <li><a href="https://www.credential.net/537b20c1-9cd7-4d56-b698-844ba5a90ca6#acc.JDYc54nB"><b>Software Engineering Certificate</b></a>, Graduated in May 2025 from <i>Coding Temple</i></li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;