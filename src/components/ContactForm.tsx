import { useState } from "react";

const ContactForm: React.FC = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        

        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        alert("Form submitted! Thanks for reaching out!");
    }

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    return (
        <section id="contact-me">

            <div className="contact-row">
                <div className="contact-col">
                    <h2>Contact Me</h2>
                    <p>Email: <a href="mailto:ctcurtis10@gmail.com">Ctcurtis10@gmail.com</a></p>
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/christian-curtis-113436326/">My Profile</a></p>
                    <p>GitHub: <a href="https://github.com/ChristianCurtis06">My GitHub</a></p>
                </div>

                <div className="contact-col">
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <legend>Get in Touch</legend>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" value={name} placeholder="Enter your full name (required)" onChange={(e) => setName(e?.target.value)} required />
                            <br />
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" value={email} placeholder="Enter your email (required)" onChange={(e) => setEmail(e?.target.value)} required />
                            <br />
                            <label htmlFor="phone">Phone Number:</label>
                            <input type="tel" id="phone" name="phone" value={phone} pattern="[0-9]{10}" placeholder="Enter your phone number" onChange={(e) => setPhone(e?.target.value)} />
                            <br />
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" value={message} rows={4} cols={50} placeholder="Enter your message here" onChange={(e) => setMessage(e?.target.value)} />
                            <br />
                                    
                            <div role="alert" aria-live="assertive" id="error-message">
                                <em>Please fill out all required fields.</em>
                            </div>
                            <button type="submit">Submit</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </section>
    );
  };
  
  export default ContactForm;