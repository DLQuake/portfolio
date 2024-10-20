"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useTranslations } from "next-intl";

const Projects = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const t = useTranslations('ProjectsPage');

    const ignoredRepos = process.env.NEXT_PUBLIC_GITHUB_API_IGNORED_REPOS;

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await axios.get(
                    process.env.NEXT_PUBLIC_GITHUB_API
                );
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

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="section notification">
            <div className="container">
                <h1 className="title is-size-2 has-text-centered mb-2">{t("title")}</h1>
                <h2 className="subtitle is-size-4 has-text-centered mb-6">{t("subtitle")}</h2>
                <div className="columns is-multiline">
                    {repos.map((repo) => (
                        <div key={repo.id} className="column is-4">
                            <div className="box project-card">
                                <h3 className="title is-capitalized is-4">{repo.name.replace(/[-_]/g, ' ')}</h3>
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
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
