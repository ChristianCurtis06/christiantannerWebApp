import { useState } from "react";
import { db } from "../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

interface ContactFormProps {
    name: string;
    email: string;
    phone?: string;
    message?: string;
}

const ContactForm: React.FC = () => {
    const [contactForm, setContactForm] = useState<ContactFormProps>({
        name: "",
        email: "",
        phone: "",
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
            await addDoc(collection(db, "contact form submissions"), contactForm);
            alert("Form submitted! Thanks for reaching out!");
        } catch (error) {
            setError(error as string);
            alert("Error submitting the form. Please try again.");
            console.error("Error submitting form: ", error);
        }
    };

    return (
        <section id="contact-me">

            <div className="contact-row">
                <div className="contact-col" id="contact-info">
                    <h2 className="section-header" id="contact-me-header">Contact Me</h2>
                    <p>Email: <a href="mailto:hello@christiantanner.com">Hello@christiantanner.com</a></p>
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/christian-curtis-113436326/">My Profile</a></p>
                    <p>GitHub: <a href="https://github.com/ChristianCurtis06">My GitHub</a></p>
                </div>

                <div className="contact-col" id="contact-form">
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <legend>Get in Touch</legend>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" value={contactForm.name} placeholder="Enter your full name (required)" onChange={handleChange} required />
                            <br />
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" value={contactForm.email} placeholder="Enter your email (required)" onChange={handleChange} required />
                            <br />
                            <label htmlFor="phone">Phone Number:</label>
                            <input type="tel" id="phone" name="phone" value={contactForm.phone} pattern="[0-9]{10}" placeholder="Enter your phone number" onChange={handleChange} />
                            <br />
                            <label htmlFor="message">Message:</label>
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
    );
  };
  
  export default ContactForm;