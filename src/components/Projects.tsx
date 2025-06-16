import { useEffect, useRef } from "react";

const Projects: React.FC = () => {
    const projectRefs = useRef<HTMLDivElement[]>([]);
    const currentHighlighted = useRef<HTMLDivElement | null>(null); // Track the currently highlighted element

    const addToRefs = (el: HTMLDivElement | null) => {
        if (el && !projectRefs.current.includes(el)) {
            projectRefs.current.push(el);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (currentHighlighted.current && currentHighlighted.current !== entry.target) {
                            currentHighlighted.current.classList.remove("highlight");
                        }

                        entry.target.classList.add("highlight");
                        currentHighlighted.current = entry.target as HTMLDivElement;
                    } else if (currentHighlighted.current === entry.target) {
                        entry.target.classList.remove("highlight");
                        currentHighlighted.current = null;
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        projectRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section id="projects">
            <h2 className="section-header" id="projects-header">Projects</h2>
aa
            <div className="content-flex">
                <div className="content-flex-card" ref={addToRefs} onClick={() => window.location.href = "#"}>
                    {/* 
                    <div className="lbyrnth-logo-container">
                        <img src="Laptop-model.svg" alt="LBYRNTH Logo" className="lbyrnth-logo" />
                    </div>
                    */}
                    <img className="content-flex-img" src="LBYRNTH_Logo.png" alt="LBYRNTH Logo" />
                    <div className="content-flex-content">
                        <h3 className="content-flex-header">LBYRNTH</h3>
                        <p>I developed the branding for LBYRNTH, which specializes in escape room packages for rental properties.</p>
                        <em>
                            <p>Skills Used:</p>
                            <ul>
                                <li>Adobe Illustrator</li>
                            </ul>
                        </em>
                    </div>
                </div>

                <div className="content-flex-card" ref={addToRefs} onClick={() => window.open("https://allaboutbaja.net/", "_blank")}>
                    <img className="content-flex-img" src="AllAboutBaja_square.png" alt="AllAboutBaja Logo" />
                    <div className="content-flex-content">
                        <h3 className="content-flex-header">AllAboutBaja.net</h3>
                        <p>I designed the logo and associated graphics for the AllAboutBaja.net travel website.</p>
                        <em>
                            <p>Skills Used:</p>
                            <ul>
                                <li>Adobe Illustrator</li>
                            </ul>
                        </em>
                    </div>
                </div>

                <div className="content-flex-card" ref={addToRefs} onClick={() => window.open("https://www.buysellammo.com/", "_blank")}>
                    <img className="content-flex-img" src="BSA_square.png" alt="BuySellAmmo Logo" />
                    <div className="content-flex-content">
                        <h3 className="content-flex-header">BuySellAmmo.com</h3>
                        <p>I headed the rebranding of the ammunition resell website BuySellAmmo.com and created their advertisement graphics.</p>
                        <em>
                            <p>Skills Used:</p>
                            <ul>
                                <li>Adobe Illustrator</li>
                            </ul>
                        </em>
                    </div>
                </div>
                
                <div className="content-flex-card" ref={addToRefs} onClick={() => window.open("https://www.youtube.com/@EPXG", "_blank")}>
                    <img className="content-flex-img" src="EPXG_favicon.png" alt="EPXG Favicon" />
                    <div className="content-flex-content">
                        <h3 className="content-flex-header">EPXG Channel</h3>
                        <p>I started and managed the gaming channel Everything Pixel Gaming (EPXG). This included creating content, editing footage, designing thumbnails, and publishing final videos.</p>
                        <em>
                            <p>Skills Used:</p>
                            <ul>
                                <li>Adobe Premiere Pro</li>
                                <li>Adobe Illustrator</li>
                            </ul>
                        </em>
                    </div>
                </div>

                <div className="content-flex-card" ref={addToRefs} onClick={() => window.open("https://rooferjacksonvillefl.com/", "_blank")}>
                    <img className="content-flex-img" src="Roofing_favicon.png" alt="RooferJacksonvilleFl Favicon" />
                    <div className="content-flex-content">
                        <h3 className="content-flex-header">RooferJacksonvilleFl.com</h3>
                        <p>I created the website and favicon for the lead generation website RooferJacksonvilleFl.net.</p>
                        <em>
                            <p>Skills Used:</p>
                            <ul>
                                <li>Wordpress</li>
                                <li>Adobe Illustrator</li>
                            </ul>
                        </em>
                    </div>
                </div>
                
                <div className="content-flex-card" ref={addToRefs} onClick={() => window.open("https://the-experience-hub.com/", "_blank")}>
                    <img className="content-flex-img" src="The Experience Hub_FAV-Blue.png" alt="The Experience Hub Favicon" />
                    <div className="content-flex-content">
                        <h3 className="content-flex-header">The-Experience-Hub.com</h3>
                        <p>I created the website and favicon for the lead generation website RooferJacksonvilleFl.net.</p>
                        <em>
                            <p>Skills Used:</p>
                            <ul>
                                <li>Shopify</li>
                                <li>Liquid</li>
                                <li>Adobe Illustrator</li>
                            </ul>
                        </em>
                    </div>
                </div>
            </div>
        </section>
    );
  };
  
  export default Projects;