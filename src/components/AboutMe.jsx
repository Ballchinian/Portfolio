import { sectionBase, headingBase, paragraphBase } from "../styles";

export default function About() {
    return (
        <section id="about" className={sectionBase}>
        <h2 className={headingBase}>About Me</h2>
        <p className={paragraphBase}>
            I’m a software engineer with experience in web development, backend
            systems, and data analysis. Skilled in Python, JavaScript, and modern
            frameworks, I enjoy creating practical tools that solve real world
            problems.
        </p>
        </section>
    );
}
