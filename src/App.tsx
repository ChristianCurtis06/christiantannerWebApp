import HomePage from "./components/HomePage";
import ContactForm from "./components/Contact";
import { Routes, Route } from "react-router-dom";
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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </InteractionContext.Provider>
  );
};

export default App;