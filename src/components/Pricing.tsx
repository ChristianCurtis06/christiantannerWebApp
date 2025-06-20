import React from "react";

type PricingTier = {
  title: string;
  price: string;
  features: string[];
  ctaText: string;
};

const graphicDesignTiers: PricingTier[] = [
    {
        title: 'Essentials',
        price: '$ 1,000',
        features: ['2 Initial Concepts', '1 Social Media Profile Graphic', 'Business Card Design', '2 Revisions'],
        ctaText: 'Get Started'
    },
    {
        title: 'Brand Builder',
        price: '$ 2,500',
        features: ['3 Initial Concepts', '3 Social Media Profile Graphics', 'Email Signature Graphic', '3 Revisions'],
        ctaText: 'Get Started'
    },
    {
        title: 'Premium',
        price: '$ 5,000',
        features: ['4 Initial Concepts', 'Full Social Media Kit', 'Marketing Assets', 'Branding Guide', 'Unlimited Revisions'],
        ctaText: 'Let\'s Talk'
    }
];

const webDevelopmentTiers: PricingTier[] = [
    {
        title: 'Launch',
        price: '$ 2,500',
        features: ['Single Page Site', 'Basic Styling', 'SEO Optimization', '2 Revisions'],
        ctaText: 'Get Started'
    },
    {
        title: 'Scale',
        price: '$ 7,500',
        features: ['Multi-page Site', 'Custom Styling', 'Branding Package', 'SEO Optimization', '3 Revisions', 'Ongoing Support'],
        ctaText: 'Get Started'
    },
    {
        title: 'Custom',
        price: '$ ~',
        features: ['Custom Design & Functionality', 'Complete Branding Package', 'Personalized Workflows'],
        ctaText: 'Let\'s Talk'
    }
];

const Pricing: React.FC = () => {
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