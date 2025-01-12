import { FaReact, FaJsSquare, FaNode, FaGitAlt, FaPython, FaHtml5, FaCss3Alt, FaBootstrap, FaSass, FaWordpress } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiBem, SiBulma, SiExpress, SiFigma, SiFlask, SiJquery, SiMysql, SiNpm, SiPhpmyadmin, SiPostgresql, SiPostman, SiVercel, SiVite } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const SkillCategories = [
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
            { name: "NPM", icon: <SiNpm /> },
            { name: "PhpMyAdmin", icon: <SiPhpmyadmin /> },
        ],
    },
    {
        category: "Databases",
        skills: [
            { name: "MySQL", icon: <SiMysql /> },
            { name: "PostgreSQL", icon: <SiPostgresql /> },
        ],
    },
    {
        category: "Methodologies",
        skills: [
            { name: "BEM", icon: <SiBem /> },
        ],
    },
];