import { sectionBase, headingBase, cardBaseReverse, linkBase } from "../styles";
export default function Projects() {
    const projects = [
        {
            title: "TTRPG Calculator",
            description:
                "Simulates ttrpg combat encounters. Analytical tooling with informative feedback.",
            link: "https://ttrpgcalc.netlify.app/",
            codeLink: "https://github.com/Ballchinian/TTRPGCalc",
        },
        {
            title: "League Matchmaker",
            description:
                "Multipurpose matchmaking for LoL unique per discord server. Glicko mmr system, minimum difference partitioning, and fully scalable",
            link: "https://lolmatchmaker.netlify.app",
            codeLink: "https://github.com/Ballchinian/LoLMatchMaker"
        },
        {
            title: "Availability",
            description:
                "Aggregates availability data from multiple people, offering seamless navigation via web and Discord integrations.",
            link: "https://availabilityspreadsheet.netlify.app/",
            codeLink: "https://github.com/Ballchinian/Availability"
        },
        {
            title: "E-Commerce",
            description:
                "Full-stack shopping application with secure authentication, advanced product filtering, search capabilities, and persistent shopping carts.",
            link: "https://e-commercelive.netlify.app/login",
            codeLink: "https://github.com/Ballchinian/E-Commerce"
        },
        {
            title: "Reddit Client",
            description:
                "A simple Reddit client app built with React and the Reddit API. Browse subreddits, view posts, and read comments.",
            link: "https://redditappfrontend.netlify.app/",
            codeLink: "https://github.com/Ballchinian/RedditApp"
        },
        {
            title: "Delvefall",
            description:
                "uses an LLM to turn every card's rules text into vector embeddings and finds the mathematically closest matches. Peaked at 25k requests in 6 hour.",
            link: "https://mtgscraper.up.railway.app/",
            codeLink: "https://github.com/Ballchinian/MTGScraper"
        }
    ];

    return (
        <section id="projects" className={sectionBase}>
        <h3 className={headingBase}>Highlighted Projects</h3>
        <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
                <div
                    key={i}
                    className={`${cardBaseReverse} min-h-[180px]`}
                >
                    <h4 className="text-xl font-bold mb-2">
                        {project.title}
                    </h4>

                    <p className="text-gray-300 mb-4">
                        {project.description}
                    </p>
                    
                    <div className="flex justify-between items-center mt-auto">
                        <a
                            href={project.codeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={linkBase}
                            aria-label={`View source code for ${project.title} on GitHub (opens in a new tab)`}
                        >
                            View Code →
                        </a>

                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={linkBase}
                                aria-label={`View the live ${project.title} project (opens in a new tab)`}
                            >
                                View Project →
                            </a>
                        )}
                </div>
            </div>
            ))}
        </div>
        </section>
    );
}
