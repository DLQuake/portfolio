
"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import { FaReact, FaJsSquare, FaGithub, FaBitbucket, FaNode, FaGitAlt, FaPython, FaHtml5, FaCss3Alt, FaBootstrap, FaSass, FaWordpress} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiChartdotjs, SiPhp, SiEslint, SiGithubpages, SiPandas, SiNumpy, SiPrestashop, SiMarkdown, SiNodemon, SiP5Dotjs, SiSequelize, SiBem, SiBulma, SiExpress, SiNotion, SiFigma, SiFlask, SiJquery, SiMysql, SiNpm, SiPhpmyadmin, SiPostgresql, SiPostman, SiVercel, SiVite, SiElementor } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

import Link from 'next/link';

import "./Experience.css";

const technologyIcons = {
    // Frontend
    React: FaReact,
    "React.js": FaReact,

    "Next.js": RiNextjsFill,
    NextJS: RiNextjsFill,

    JavaScript: FaJsSquare,
    JS: FaJsSquare,

    HTML: FaHtml5,
    HTML5: FaHtml5,

    CSS: FaCss3Alt,
    CSS3: FaCss3Alt,

    Bootstrap: FaBootstrap,
    Sass: FaSass,
    SCSS: FaSass,
    Bulma: SiBulma,
    jQuery: SiJquery,

    "Chart.js": SiChartdotjs,
    ChartJS: SiChartdotjs,

    "p5.js": SiP5Dotjs,
    P5: SiP5Dotjs,

    BEM: SiBem,

    // Backend
    "Node.js": FaNode,
    NodeJS: FaNode,

    PHP: SiPhp,
    Python: FaPython,

    Express: SiExpress,
    "Express.js": SiExpress,

    Flask: SiFlask,
    Sequelize: SiSequelize,

    // Bazy danych
    MySQL: SiMysql,
    PostgreSQL: SiPostgresql,
    phpMyAdmin: SiPhpmyadmin,

    // Narzędzia developerskie
    Git: FaGitAlt,
    GitHub: FaGithub,
    "GitHub Pages": SiGithubpages,
    Bitbucket: FaBitbucket,
    Elementor: SiElementor,

    npm: SiNpm,
    Nodemon: SiNodemon,
    ESLint: SiEslint,
    Vite: SiVite,
    Vercel: SiVercel,

    VSCode: VscVscode,
    "Visual Studio Code": VscVscode,

    Postman: SiPostman,

    // Analiza danych
    Pandas: SiPandas,
    NumPy: SiNumpy,

    // CMS i e-commerce
    WordPress: FaWordpress,
    PrestaShop: SiPrestashop,

    // Pozostałe
    Markdown: SiMarkdown,
    Notion: SiNotion,
    Figma: SiFigma,
};

const Experience = () => {
    const t = useTranslations("AboutPage");
    const rawExperiences = t.raw("experience.items");

    const experiences = Array.isArray(rawExperiences)
        ? rawExperiences
        : [];

    return (
        <section className="section notification mb-0 experience-section">
            <div className="container">
                <h2 className="title is-size-2 has-text-centered experience-heading">
                    {t("experience.title")}
                </h2>

                <p className="subtitle has-text-centered experience-subtitle">
                    {t("experience.subtitle")}
                </p>

                {experiences.length > 0 ? (
                    <div className="experience-timeline">
                        {experiences.map((item, index) => (
                            <article
                                className={`experience-item ${
                                    index % 2 === 0
                                        ? "experience-item-left"
                                        : "experience-item-right"
                                }`}
                                key={`${item.date}-${item.company}`}
                            >
                                <div
                                    className="experience-marker"
                                    aria-hidden="true"
                                >
                                    <span />
                                </div>

                                <Link href={item.url} target="_blank" className="experience-card box">
                                    <span className="experience-date">
                                        {item.date}
                                    </span>

                                    <div className="experience-company-header">
                                        <div className="experience-company-info">
                                            <h3 className="experience-role">
                                                {item.role}
                                            </h3>

                                            <p className="experience-company">
                                                {item.company}
                                            </p>
                                        </div>

                                        <div className="experience-company-logo">
                                            {item.logo ? (
                                                <Image
                                                    src={item.logo}
                                                    alt={`Logo ${item.company}`}
                                                    width={76}
                                                    height={76}
                                                    className="experience-logo-image"
                                                />
                                            ) : (
                                                <span
                                                    className="experience-logo-fallback"
                                                    aria-hidden="true"
                                                >
                                                    {item.company
                                                        .slice(0, 2)
                                                        .toUpperCase()}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <p className="experience-description">
                                        {item.description}
                                    </p>

                                    {Array.isArray(item.technologies) &&
                                        item.technologies.length > 0 && (
                                            <div className="experience-tags">
                                                {item.technologies.map(
                                                    (technology) => {
                                                        const Icon =
                                                            technologyIcons[
                                                                technology
                                                            ];

                                                        return (
                                                            <span
                                                                className="experience-tag"
                                                                key={technology}
                                                            >
                                                                {Icon && (
                                                                    <Icon
                                                                        className="experience-tech-icon"
                                                                        aria-hidden="true"
                                                                    />
                                                                )}

                                                                <span>
                                                                    {technology}
                                                                </span>
                                                            </span>
                                                        );
                                                    }
                                                )}
                                            </div>
                                        )}
                                </Link>
                            </article>
                        ))}
                    </div>
                ) : (
                    <p className="has-text-centered">
                        {t("experience.empty")}
                    </p>
                )}
            </div>
        </section>
    );
};

export default Experience;
