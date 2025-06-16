import React from "react";
import PageLayout from "./PageLayout";
import Header from "./Header";
import HeaderArrow from "./HeaderArrow";
import Introduction from "./Introduction";
import About from "./About";
import Projects from "./Projects";
import Services from "./Services"

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
            </main>
        </PageLayout>
    );
};

export default HomePage;