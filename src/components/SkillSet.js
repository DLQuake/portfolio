import { FaReact, FaJsSquare, FaNode, FaGitAlt, FaPython, FaHtml5, FaCss3Alt, FaBootstrap, FaSass, FaWordpress } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { GiMaterialsScience } from "react-icons/gi";
import { SiBem, SiBulma, SiExpress, SiFigma, SiFlask, SiJquery, SiMysql, SiPostgresql, SiPostman, SiVercel, SiVite } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { useTranslations } from "next-intl";

const skillCategories = [
    {
        category: "Frontend",
        skills: [
            { name: "HTML", icon: <FaHtml5 /> },
            { name: "CSS", icon: <FaCss3Alt /> },
            { name: "SASS", icon: <FaSass /> },
            { name: "Bootstrap", icon: <FaBootstrap /> },
            { name: "Bulma", icon: <SiBulma /> },
            { name: "JavaScript", icon: <FaJsSquare /> },
            { name: "jQuery", icon: <SiJquery /> },
            { name: "React", icon: <FaReact /> },
            { name: "Next.js", icon: <RiNextjsFill /> },
        ],
    },
    {
        category: "Backend",
        skills: [
            { name: "Node.js", icon: <FaNode /> },
            { name: "Express.js", icon: <SiExpress /> },
            { name: "Python", icon: <FaPython /> },
            { name: "Flask", icon: <SiFlask /> },
        ],
    },
    {
        category: "Tools",
        skills: [
            { name: "Git", icon: <FaGitAlt /> },
            { name: "Vite", icon: <SiVite /> },
            { name: "Figma", icon: <SiFigma /> },
            { name: "VS Code", icon: <VscVscode /> },
            { name: "Postman", icon: <SiPostman /> },
            { name: "WordPress", icon: <FaWordpress /> },
            { name: "Vercel", icon: <SiVercel /> },
        ],
    },
    {
        category: "Databases",
        skills: [
            { name: "MySQL", icon: <SiMysql /> },
            { name: "PostgreSQL", icon: <SiPostgresql />},
        ],
    },
    {
        category: "Methodologies",
        skills: [
            { name: "BEM", icon: <SiBem /> },
        ],
    },
];

const SkillSet = () => {
    const t = useTranslations('AboutPage');
    return (
        <div className="section notification mb-0">
            <div className="container">
                <h2 className="title is-size-2 has-text-centered">{t("skills.title")}</h2>

                <div className="columns">
                    {skillCategories.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="column">
                            <h3 className="subtitle is-size-3 has-text-centered">{t(`skills.${category.category}`)}</h3>
                            <div className="is-multiline">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="column skill-card">
                                        <div className="box has-text-centered">
                                            <div className="icon is-size-1 is-large">{skill.icon}</div>
                                            <p className="title">{skill.name}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillSet;
