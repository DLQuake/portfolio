import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import "./ProjectCard.css";

const ProjectCard = ({ repo, t }) => {
    return (
        <div className="box project-card">
            <Image
                src={`https://opengraph.githubassets.com/1/${repo.owner.login}/${repo.name}`}
                alt={`${repo.name} preview`}
                className="project-image mb-4"
                width={384}
                height={192}
                priority
            />
            <h3 className="title has-text-centered is-capitalized is-4">{repo.name.replace(/[-_]/g, ' ')}</h3>
            <p className="mb-5">{repo.description || "No description available."}</p>

            <div className="buttons is-centered mt-4">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="button is-link">
                    <FaGithub className="mr-1" />
                    {t("github")}
                </a>
                {repo.demoUrl && (
                    <a href={repo.demoUrl} target="_blank" rel="noopener noreferrer" className="button is-info">
                        <FaExternalLinkAlt className="mr-1" />
                        {t("demo")}
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;