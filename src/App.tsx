import HomePage from "./components/HomePage";
import ContactForm from "./components/Contact";
import { Routes, Route } from "react-router-dom";
import InteractionContext from "./context/InteractionContext";
import ServicesContext from "./context/ServicesContext";
import { useState, useEffect } from "react";
import "../style.css";

const App: React.FC = () => {
  const [interaction, setInteraction] = useState({ isScrolled: false, scrollStatus: 0, isHovering: false, mouseY: 0, mouseX: 0, hoveredElement: "" });
  const [services, setServices] = useState({
    webDevelopmentTiers: [
      {
        title: 'Launch',
        price: '$ 2,500',
        features: ['Single Page Site ', 'Basic Styling', 'SEO Optimization', '2 Revisions'],
        ctaText: 'Get Started'
      },
      {
        title: 'Scale',
        price: '$ 7,500',
        features: ['Multi-page Site', 'Custom Styling', 'SEO Optimization', '3 Revisions', 'Ongoing Support'],
        ctaText: 'Get Started'
      },
      {
        title: 'Custom',
        price: '$ ~',
        features: ['Custom Design & Functionality', 'Complete Branding Package ($2,500 value)', 'Personalized Workflows'],
        ctaText: 'Let\'s Talk'
      }
    ],
    graphicDesignTiers: [
      {
        title: 'Essentials',
        price: '$ 1,000',
        features: ['2 Initial Concepts', '1 Social Media Profile Graphic', 'Limited Branding Guide', '1 Revisions'],
        ctaText: 'Get Started'
      },
      {
        title: 'Brand Builder',
        price: '$ 2,500',
        features: ['3 Initial Concepts', '3 Social Media Profile Graphics', 'Full Branding Guide', '2 Revisions'],
        ctaText: 'Get Started'
      },
      {
        title: 'Premium',
        price: '$ 5,000',
        features: ['5 Initial Concepts', 'Full Social Media Kit', 'Marketing Assets', 'Expanded Branding Guide', 'Unlimited Revisions'],
        ctaText: 'Get Started'
      }
    ]
  });

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
      <ServicesContext.Provider value={{ services, setServices }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </ServicesContext.Provider>
    </InteractionContext.Provider>
  );
};

export default App;