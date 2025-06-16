import React from "react";
import PageLayout from "./PageLayout";
import Header from "./Header";
import HeaderArrow from "./HeaderArrow";
import Introduction from "./Introduction";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills"

const HomePage: React.FC = () => {
    return (
        <PageLayout>
            <Header />
            <HeaderArrow />
            <main>
                <Introduction />
                <About />
                <Projects />
                <Skills />
            </main>
        </PageLayout>
    );
};

export default HomePage;