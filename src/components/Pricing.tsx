import React from "react";

type PricingTier = {
  title: string;
  price: string;
  features: string[];
  ctaText: string;
};

const webDevelopmentTiers: PricingTier[] = [
    {
        title: 'Basic',
        price: '$ 2,500',
        features: ['1 Page', 'Basic Styling', 'SEO Optimization', '2 Revisions'],
        ctaText: 'Get Started'
    },
    {
        title: 'Premium',
        price: '$ 7,500',
        features: ['5 Pages', 'Custom Styling', 'Branding Package', 'SEO Optimization', '3 Revisions', 'Ongoing Support'],
        ctaText: 'Get Started'
    },
    {
        title: 'Custom',
        price: '$ ~',
        features: ['More Than 5 Pages', 'Custom Design and Functionality', 'Complete Branding Package', 'Personalized Workflows'],
        ctaText: 'Let\'s Talk'
    }
];

const graphicDesignTiers: PricingTier[] = [
    {
        title: 'Basic',
        price: '$ 2,500',
        features: ['1 Page', 'Basic Styling', 'SEO Optimization', '2 Revisions'],
        ctaText: 'Get Started'
    },
    {
        title: 'Premium',
        price: '$ 7,500',
        features: ['5 Pages', 'Custom Styling', 'Branding Package', 'SEO Optimization', '3 Revisions', 'Ongoing Support'],
        ctaText: 'Get Started'
    },
    {
        title: 'Custom',
        price: '$ ~',
        features: ['More Than 5 Pages', 'Custom Design and Functionality', 'Complete Branding Package', 'Personalized Workflows'],
        ctaText: 'Let\'s Talk'
    }
];

const Pricing: React.FC = () => {
    return (
        <section id="pricing">
            <h2 className="section-header">Pricing Packages</h2>

            <h3>Web Development</h3>
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

            <h3>Graphic Design</h3>
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