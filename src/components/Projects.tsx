import { useEffect, useRef } from "react";

const projects = [
	// {
	// 	title: "LBYRNTH",
	// 	img: "LBYRNTH_Logo.png",
	// 	alt: "LBYRNTH Logo",
	// 	desc: "I developed the branding for LBYRNTH, which specializes in escape room packages for rental properties.",
	// 	skills: ["Adobe Illustrator"],
	// 	url: "#"
	// },
	// {
	// 	title: "All About Baja",
	// 	img: "AllAboutBaja_square.png",
	// 	alt: "AllAboutBaja Logo",
	// 	desc: "I designed the logo and associated graphics for the AllAboutBaja.net travel website.",
	// 	skills: ["Adobe Illustrator"],
	// 	url: "https://allaboutbaja.net/"
	// },
	// {
	// 	title: "BuySellAmmo.com",
	// 	img: "BSA_square.png",
	// 	alt: "BuySellAmmo Logo",
	// 	desc: "I headed the rebranding of the ammunition resell website BuySellAmmo.com and created their advertisement graphics.",
	// 	skills: ["Adobe Illustrator"],
	// 	url: "https://www.buysellammo.com/"
	// },
	// {
	// 	title: "EPXG Channel",
	// 	img: "EPXG_favicon.png",
	// 	alt: "EPXG Favicon",
	// 	desc: "I started and managed the gaming channel Everything Pixel Gaming (EPXG). This included creating content, editing footage, designing thumbnails, and publishing final videos.",
	// 	skills: ["Adobe Premiere Pro", "Adobe Illustrator"],
	// 	url: "https://www.youtube.com/@EPXG"
	// },
	{
		title: "The Experience Hub",
		img: "The_Experience_Hub-Promo.png",
		alt: "The Experience Hub Favicon",
		desc: "I created the website and favicon for the lead generation website RooferJacksonvilleFl.net.",
		skills: ["Shopify", "Liquid", "Adobe Illustrator"],
		url: "https://the-experience-hub.com/"
	},
	{
		title: "Tate AV Consulting",
		img: "Tate_AV-Promo.png",
		alt: "TateAVConsulting Favicon",
		desc: "I created the website and favicon for the lead generation website RooferJacksonvilleFl.net.",
		skills: ["Squarespace", "HTML & CSS", "SEO Optimization", "Adobe Illustrator"],
		url: "https://tateavconsulting.com/"
	},
	{
		title: "THoR Works",
		img: "THoR_Works-Promo.png",
		alt: "ThorWorks Favicon",
		desc: "I created the website and favicon for the lead generation website RooferJacksonvilleFl.net.",
		skills: ["Wix", "SEO Optimization", "Adobe Illustrator"],
		url: "https://thorworks.online/"
	},
	{
		title: "Roofer Jacksonville Fl",
		img: "Jacksonville_Roofer-Promo.png",
		alt: "RooferJacksonvilleFl Favicon",
		desc: "I created the website and favicon for the lead generation website RooferJacksonvilleFl.net.",
		skills: ["Wordpress", "Adobe Illustrator"],
		url: "https://rooferjacksonvillefl.com/"
	}
];

const Projects: React.FC = () => {
	const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
	const currentHighlighted = useRef<HTMLDivElement | null>(null); // Track the currently highlighted element

	// const addToRefs = (el: HTMLDivElement | null) => {
	// 	if (el && !projectRefs.current.includes(el)) {
	// 		projectRefs.current.push(el);
	// 	}
	// };

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						if (
							currentHighlighted.current &&
							currentHighlighted.current !== entry.target
						) {
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
			<h2 className="section-header" id="projects-header">My Work</h2>
			<div className="content-flex">
				{projects.map((project, idx) => (
					<div
						className="content-flex-card"
						key={project.title}
                        ref={el => { projectRefs.current[idx] = el; }}
                        onClick={() =>
							project.url === "#"
								? undefined
								: window.open(project.url, "_blank")
						}
					>
						<img
							className="content-flex-img"
							src={project.img}
							alt={project.alt}
						/>
						<div className="content-flex-content">
							<h3 className="content-flex-header">{project.title}</h3>
							<p>{project.desc}</p>
							<em>
								<p>Skills Used:</p>
								<ul>
									{project.skills.map((skill) => (
										<li key={skill}>{skill}</li>
									))}
								</ul>
							</em>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Projects;