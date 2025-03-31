import { useEffect, useState } from "react";

const HeaderArrow: React.FC = () => {
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
        <div className="header-arrow" style={{ opacity }}>
            <p>Scroll for more</p>
            <span className="header-arrow-img">&#x2193;</span>
        </div>
    );
};

export default HeaderArrow;