import React from "react";
import PageLayout from "./PageLayout";
import Header from "./Header";
import HeaderArrow from "./HeaderArrow";
import Introduction from "./Introduction";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Skills from "./Skills"
import ContactForm from "./ContactForm";
import Footer from "./Footer";

const HomePage: React.FC = () => {
    return (
        <PageLayout>
            <Header />
            <HeaderArrow />
            <main>
                <Introduction />
                <AboutMe />
                <Projects />
                <Skills />
                <ContactForm />
            </main>
            <Footer />
        </PageLayout>
    );
};

export default HomePage;