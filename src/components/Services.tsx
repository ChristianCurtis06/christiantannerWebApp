import { useContext } from "react";
import InteractionContext from "../context/InteractionContext";

const Services: React.FC = () => {
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
        <section id="services">
            <h2 className="section-header" id="services-header">Services</h2>
            <div className="content-grid">
                <div
                    onMouseMove={(e) => handleMouseMove(e, "interests")}
                    onMouseEnter={() => handleMouseEnter("interests")}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        background: interaction.isHovering && interaction.hoveredElement === "interests"
                        ? `radial-gradient(circle at ${interaction.mouseX}px ${interaction.mouseY}px, rgba(83, 83, 83, 0.2) 0%, rgba(22, 22, 22, 1)) 50%`
                        : "rgba(22, 22, 22, 1)",
                    }}
                    className="content-card"
                    id="website-development-services"
                >
                    <h3 className="card-header">Web Development</h3>
                    <p>I offer tailored web development consulting for professionals and small businesses, creating responsive, user-friendly websites with clean code, modern design, and intuitive navigation. My work incorporates on-page SEO best practices and custom automation tools to improve visibility and streamline operations. Every project is shaped through close collaboration to ensure it aligns with each client’s brand, goals, and industry.</p>
                </div>

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
                    id="graphic-design-services"
                    >
                    <h3 className="card-header">Graphic Design</h3>
                    <p>I create high-impact visual design solutions that combine strong UI/UX principles with each client’s brand identity, audience, and goals. From logos and social media templates to full branding packages, I deliver cohesive visuals that elevate both web and print presence. Throughout the process, I provide clear communication and adaptable support to ensure each project aligns with the client’s evolving creative direction.</p>
                </div>
            </div>
        </section>
    );
  };
  
  export default Services;