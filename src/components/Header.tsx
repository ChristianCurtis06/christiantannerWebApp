import { useEffect, useState } from "react";

const Header: React.FC = () => {
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const scrollY = window.scrollY;
        const maxScroll = 300;
        const newOpacity = Math.max(1 - scrollY / maxScroll, 0);
        setOpacity(newOpacity);
      }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const maxScroll = 300;
            const newOpacity = Math.max(1 - scrollY / maxScroll, 0);
            setOpacity(newOpacity);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header id="header">
            <h1 className="header-text" style={{ opacity }}>
                <span>Hello,</span>
                <br />
                <em id="header-em">I'm Christian!</em>
                <p id="header-bio">Web Developer | Graphic Designer | SEO Specialist</p>
            </h1>
        </header>
    );
  };
  
  export default Header;