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

            <div>
                <div className="content-flex" ref={addToRefs} onClick={() => window.location.href = "#"}>
                    {/* 
                    <div className="lbyrnth-logo-container">
                        <img src="Laptop-model.svg" alt="LBYRNTH Logo" className="lbyrnth-logo" />
                    </div>
                    */}
                    <img src="LBYRNTH_Logo.png" alt="LBYRNTH Logo" />
                    <div>
                        <h3>LBYRNTH</h3>
                        <p>I developed the branding for LBYRNTH, which specializes in escape room packages for rental properties.</p>
                        <em>
                            <p>Skills Used:</p>
                            <ul>
                                <li>Adobe Illustrator</li>
                            </ul>
                        </em>
                    </div>
                </div>

                <div className="content-flex" ref={addToRefs} onClick={() => window.location.href = "https://allaboutbaja.net/"}>
                    <img src="AllAboutBaja_square.png" alt="AllAboutBaja Logo" />
                    <div>
                        <h3>AllAboutBaja.net</h3>
                        <p>I designed the logo and associated graphics for the AllAboutBaja.net travel website.</p>
                        <em>
                            <p>Skills Used:</p>
                            <ul>
                                <li>Adobe Illustrator</li>
                            </ul>
                        </em>
                    </div>
                </div>

                <div className="content-flex" ref={addToRefs} onClick={() => window.location.href = "https://www.buysellammo.com/"}>
                    <img src="BSA_square.png" alt="BuySellAmmo Logo" />
                    <div>
                        <h3>BuySellAmmo.com</h3>
                        <p>I headed the rebranding of the ammunition resell website BuySellAmmo.com and created their advertisement graphics.</p>
                        <em>
                            <p>Skills Used:</p>
                            <ul>
                                <li>Adobe Illustrator</li>
                            </ul>
                        </em>
                    </div>
                </div>
                
                <div className="content-flex" ref={addToRefs} onClick={() => window.location.href = "https://www.youtube.com/@EPXG"}>
                    <img src="EPXG_favicon.png" alt="EPXG Favicon" />
                    <div>
                        <h3>EPXG Channel</h3>
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

                <div className="content-flex" ref={addToRefs} onClick={() => window.location.href = "https://rooferjacksonvillefl.com/"}>
                    <img src="Roofing_favicon.png" alt="RooferJacksonvilleFl Favicon" />
                    <div>
                        <h3>RooferJacksonvilleFl.com</h3>
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
            </div>
        </section>
    );
  };
  
  export default Projects;