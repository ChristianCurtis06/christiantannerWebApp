import React from "react";

type PricingTier = {
  title: string;
  price: string;
  features: string[];
  ctaText: string;
};

const tiers: PricingTier[] = [
  {
    title: 'Basic',
    price: '$1,000',
    features: ['1 Page Website', 'Basic SEO', '1 Revision'],
    ctaText: 'Get Started',
  },
  {
    title: 'Standard',
    price: '$1,500',
    features: ['Up to 5 Pages', 'SEO Optimization', '3 Revisions'],
    ctaText: 'Get Started',
  },
  {
    title: 'Premium',
    price: '$3,000',
    features: ['Custom Design', 'Unlimited Pages', 'Ongoing Support'],
    ctaText: 'Get Started',
  },
];

const Pricing: React.FC = () => {
    return (
        <section id="pricing">
            <h2 className="section-header">Pricing</h2>
            <div className="pricing-grid">
                {tiers.map((tier, index) => (
                <div className="pricing-card" key={index}>
                    <h3 className="card-title">{tier.title}</h3>
                    <p className="card-price">{tier.price}</p>
                    <ul className="features-list">
                    {tier.features.map((feature, i) => (
                        <li key={i}>✓ {feature}</li>
                    ))}
                    </ul>
                    <button className="cta-button">{tier.ctaText}</button>
                </div>
                ))}
            </div>
        </section>
    );
};

export default Pricing;