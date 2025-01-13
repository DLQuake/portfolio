"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useTranslations } from "next-intl";
import LoadingScreen from "./LoadingScreen/LoadingScreen";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ProjectsGrid from "./ProjectsGrid/ProjectsGrid";

const Projects = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const t = useTranslations('ProjectsPage');

    const ignoredRepos = process.env.NEXT_PUBLIC_GITHUB_API_IGNORED_REPOS;

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await axios.get(process.env.NEXT_PUBLIC_GITHUB_API);
                const filteredRepos = response.data.filter(repo => !ignoredRepos.includes(repo.name));
                const reposWithDemo = filteredRepos.map(repo => ({
                    ...repo,
                    demoUrl: repo.homepage
                }));
                setRepos(reposWithDemo);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

    if (loading) {
        return <LoadingScreen />;
    }

    if (error) {
        return <ErrorMessage message={t("error")} />;
    }

    return (
        <div className="section notification">
            <div className="container">
                <h1 className="title is-size-2 has-text-centered mb-2">{t("title")}</h1>
                <h2 className="subtitle is-size-4 has-text-centered mb-6">{t("subtitle")}</h2>
                <ProjectsGrid repos={repos} t={t} />
            </div>
        </div>
    );
};

export default Projects;
