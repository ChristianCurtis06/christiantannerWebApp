import React, { useContext } from "react";
import ServicesContext from "../context/ServicesContext";

const Pricing: React.FC = () => {

    const { services } = useContext(ServicesContext);
    const { webDevelopmentTiers, graphicDesignTiers } = services;
    return (
        <section id="pricing">
            <h2 className="section-header">Pricing Packages</h2>

            <h3 className="pricing-category">Web Development</h3>
            <div className="pricing-grid">
                {webDevelopmentTiers.map((tier, index) => (
                    <div className="pricing-card" key={index}>
                        <h3 className="card-title">{tier.title}</h3>
                        <p className="card-price">{tier.price}</p>
                        <ul className="features-list">
                        {tier.features.map((feature, i) => (
                            <li key={i}>✓ {feature}</li>
                        ))}
                        </ul>
                        <button className="cta-button" onClick={() => window.location.href = "/contact"}>{tier.ctaText}</button>
                    </div>
                ))}
            </div>

            <h3 className="pricing-category">Graphic Design</h3>
            <div className="pricing-grid">
                {graphicDesignTiers.map((tier, index) => (
                    <div className="pricing-card" key={index}>
                        <h3 className="card-title">{tier.title}</h3>
                        <p className="card-price">{tier.price}</p>
                        <ul className="features-list">
                        {tier.features.map((feature, i) => (
                            <li key={i}>✓ {feature}</li>
                        ))}
                        </ul>
                        <button className="cta-button" onClick={() => window.location.href = "/contact"}>{tier.ctaText}</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Pricing;