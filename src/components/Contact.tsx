import { useState, useContext } from "react";
import PageLayout from "./PageLayout";
import ServicesContext from "../context/ServicesContext";

interface ContactFormProps {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    service?: string;
    message?: string;
}

const ContactForm: React.FC = () => {
    const { services } = useContext(ServicesContext);
    const { webDevelopmentTiers, graphicDesignTiers } = services;

    const [contactForm, setContactForm] = useState<ContactFormProps>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setContactForm((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await fetch('https://hook.us2.make.com/gglkyvc4pvhwm77o94dls4ed5t6646ul', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(contactForm)
            });
            setContactForm({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                service: "",
                message: "",
            });
            alert("Form submitted! Thanks for reaching out!");
        } catch (error) {
            setError(error as string);
            alert("Error submitting the form. Please try again.");
            console.error("Error submitting form: ", error);
        }
    };

    return (
        <PageLayout>
            <section id="contact">
                <div className="contact-row">
                    <div className="contact-col" id="contact-info">
                        <h2 className="section-header" id="contact-me-header">Contact Me</h2>
                        <p>Email: <a href="mailto:hello@christiantanner.com">Hello@christiantanner.com</a></p>
                        <p>Instagram: <a href="https://www.instagram.com/christiantannerdev/">My Profile</a></p>
                        <p>LinkedIn: <a href="https://www.linkedin.com/in/christian-curtis-113436326/">My Profile</a></p>
                        <p>GitHub: <a href="https://github.com/ChristianCurtis06">My Portfolio</a></p>
                    </div>

                    <div className="contact-col" id="contact-form">
                        <form onSubmit={handleSubmit}>
                            <fieldset>
                                <div className="name-fields">
                                    <div className="name-field">
                                        <label htmlFor="firstName">First Name:</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            value={contactForm["firstName"]}
                                            placeholder="First name (required)"
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="name-field">
                                        <label htmlFor="lastName">Last Name:</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            value={contactForm["lastName"]}
                                            placeholder="Last name (required)"
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" value={contactForm.email} placeholder="Enter your email (required)" onChange={handleChange} required />
                                <br />
                                <label htmlFor="phone">Phone Number:</label>
                                <input type="tel" id="phone" name="phone" value={contactForm.phone} pattern="[0-9]{10}" placeholder="Enter your phone number" onChange={handleChange} />
                                <br />
                                <label htmlFor="service">What service are you interested in?</label>
                                <div className="radio-groups">
                                    <div className="radio-group">
                                    <h3 className="radio-group-title">Web Development</h3>
                                    {[...webDevelopmentTiers].map((tier) => (
                                        <label className="radio-label" key={tier.title}>
                                            <input
                                            type="radio"
                                            name="service"
                                            value={tier.title}
                                            checked={contactForm.service === tier.title}
                                            onChange={handleChange}
                                            />
                                            {tier.title}
                                        </label>
                                    ))}
                                    </div>
                                    <div className="radio-group">
                                    <h3 className="radio-group-title">Graphic Design</h3>
                                    {[...graphicDesignTiers].map((tier) => (
                                        <label className="radio-label" key={tier.title}>
                                            <input
                                            type="radio"
                                            name="service"
                                            value={tier.title}
                                            checked={contactForm.service === tier.title}
                                            onChange={handleChange}
                                            />
                                            {tier.title}
                                        </label>
                                    ))}
                                    </div>
                                </div>
                                <label htmlFor="message">What else do I need to know?</label>
                                <textarea id="message" name="message" value={contactForm.message} rows={4} cols={50} placeholder="Enter your message here" onChange={handleChange} />
                                <br />
                                        
                                <div role="alert" aria-live="assertive" id="error-message">
                                    <em>Please fill out all required fields.</em>
                                </div>
                                {error && <p className="error">{error}</p>}
                                <br />
                                <button type="submit">Submit</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
  };
  
  export default ContactForm;