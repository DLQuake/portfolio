import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectsGrid = ({ repos, t }) => {
    return (
        <div className="columns is-multiline">
            {repos.map((repo) => (
                <div key={repo.id} className="column is-4">
                    <ProjectCard repo={repo} t={t} />
                </div>
            ))}
        </div>
    );
};

export default ProjectsGrid;
