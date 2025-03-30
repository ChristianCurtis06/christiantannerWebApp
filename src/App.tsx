import HomePage from "./components/HomePage";
import InteractionContext from "./context/InteractionContext";
import { useState, useEffect } from "react";
import "../style.css";

const App: React.FC = () => {
  const [interaction, setInteraction] = useState({ isScrolled: false, scrollStatus: 0, isHovering: false, mouseY: 0, mouseX: 0, hoveredElement: "" });

  useEffect(() => {
    const scrollY = window.scrollY;
    setInteraction((prevInteraction) => ({
      ...prevInteraction,
      isScrolled: scrollY > 1,
      scrollStatus: scrollY,
    }));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setInteraction((prevInteraction) => ({
        ...prevInteraction,
        isScrolled: scrollY > 1,
        scrollStatus: scrollY,
      }));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <InteractionContext.Provider value={{ interaction, setInteraction }}>
      <HomePage />
    </InteractionContext.Provider>
  );
};

export default App;