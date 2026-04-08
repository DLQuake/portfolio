import { FaReact, FaJsSquare, FaGithub, FaChartLine, FaBitbucket, FaNode, FaGitAlt, FaPython, FaHtml5, FaCss3Alt, FaBootstrap, FaSass, FaWordpress } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiChartdotjs, SiPhp, SiEslint, SiGithubpages, SiPandas, SiNumpy, SiPrestashop, SiMarkdown, SiNodemon, SiP5Dotjs, SiSequelize, SiBem, SiBulma, SiExpress, SiNotion, SiFigma, SiFlask, SiJquery, SiMysql, SiNpm, SiPhpmyadmin, SiPostgresql, SiPostman, SiVercel, SiVite } from "react-icons/si";
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
            { name: "Chart.js", icon: <SiChartdotjs /> },
            { name: "p5.js", icon: <SiP5Dotjs /> },
        ],
    },
    {
        category: "Backend",
        skills: [
            { name: "Node.js", icon: <FaNode /> },
            { name: "Express.js", icon: <SiExpress /> },
            { name: "Python", icon: <FaPython /> },
            { name: "Flask", icon: <SiFlask /> },
            { name: "Sequelize", icon: <SiSequelize /> },
            { name: "PHP", icon: <SiPhp /> },
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
        category: "Tools",
        skills: [
            { name: "Git", icon: <FaGitAlt /> },
            { name: "GitHub", icon: <FaGithub /> },
            { name: "Bitbucket", icon: <FaBitbucket /> },
            { name: "Vite", icon: <SiVite /> },
            { name: "NPM", icon: <SiNpm /> },
            { name: "Nodemon", icon: <SiNodemon /> },
            { name: "Figma", icon: <SiFigma /> },
            { name: "ESlint", icon: <SiEslint /> },
            { name: "Postman", icon: <SiPostman /> },
            { name: "VS Code", icon: <VscVscode /> },
            { name: "Vercel", icon: <SiVercel /> },
            { name: "GitHub Pages", icon: <SiGithubpages /> },
            { name: "Notion", icon: <SiNotion /> },
            { name: "Markdown", icon: <SiMarkdown /> },
            { name: "PhpMyAdmin", icon: <SiPhpmyadmin /> },
        ],
    },
    {
        category: "DataScience",
        skills: [
            { name: "Numpy", icon: <SiNumpy /> },
            { name: "Pandas", icon: <SiPandas /> },
            { name: "Matplotlib", icon: <FaChartLine /> },
        ],
    },
    {
        category: "CMSEcommerce",
        skills: [
            { name: "WordPress", icon: <FaWordpress /> },
            { name: "PrestaShop", icon: <SiPrestashop /> },
        ],
    },
    {
        category: "Methodologies",
        skills: [
            { name: "BEM", icon: <SiBem /> },
        ],
    },
];