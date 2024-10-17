import { FaReact, FaJsSquare, FaNode, FaGitAlt, FaPython, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { GiMaterialsScience } from "react-icons/gi";

const skillCategories = [
    {
        category: "Frontend",
        skills: [
            { name: "JavaScript", icon: <FaJsSquare /> },
            { name: "React", icon: <FaReact /> },
            { name: "Next.js", icon: <RiNextjsFill /> },
            { name: "CSS", icon: <FaCss3Alt /> },
            { name: "HTML", icon: <FaHtml5 /> },
        ],
    },
    {
        category: "Backend",
        skills: [
            { name: "Node.js", icon: <FaNode /> },
            { name: "Python", icon: <FaPython /> },
        ],
    },
    {
        category: "Tools",
        skills: [
            { name: "Git", icon: <FaGitAlt /> },
        ],
    },
    {
        category: "Data Science",
        skills: [
            { name: "Data Science", icon: <GiMaterialsScience /> },
        ],
    },
];

const SkillSet = () => {
    return (
        <div className="section notification mb-0">
            <div className="container">
                <h2 className="title is-size-2 has-text-centered">Skills</h2>

                <div className="columns">
                    {skillCategories.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="column">
                            <h3 className="subtitle is-size-3 has-text-centered">{category.category}</h3>
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
