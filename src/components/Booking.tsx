import React from 'react';
import { useNavigate } from "react-router-dom";

const Booking: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section id="booking">
            <h3 className="section-header">Ready to Start Your Project?</h3>
            <p>Bring your vision to life with custom web and graphic design that’s built to elevate your brand. Whether you're launching something new or refreshing your look, let's create something that makes an impact.</p>
            <button onClick={() => navigate("/contact")}>Get in Touch Today</button>
        </section>
    );
};

export default Booking;