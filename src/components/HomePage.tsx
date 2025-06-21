import React from "react";
import PageLayout from "./PageLayout";
import Header from "./Header";
import HeaderArrow from "./HeaderArrow";
import Introduction from "./Introduction";
import About from "./About";
import Projects from "./Projects";
import Services from "./Services"
import Pricing from "./Pricing";
import Booking from "./Booking";

const HomePage: React.FC = () => {
    return (
        <PageLayout>
            <Header />
            <HeaderArrow />
            <main>
                <Introduction />
                <About />
                <Projects />
                <Services />
                <Pricing />
                <Booking />
            </main>
        </PageLayout>
    );
};

export default HomePage;