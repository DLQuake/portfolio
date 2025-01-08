"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useTranslations } from "next-intl";
import Image from "next/image";

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

    if (loading) {
        return (
            <div className="hero notification is-fullheight">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <Image
                            src="/images/tube-spinner.svg"
                            alt="Loading"
                            className="spinner"
                            width={300}
                            height={300}
                            priority
                        />
                    </div>
                </div>
            </div>
        );
    }
    if (error) {
        return (
            <div className="hero notification is-fullheight">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <p className="title">{t("error")}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="section notification">
            <div className="container">
                <h1 className="title is-size-2 has-text-centered mb-2">{t("title")}</h1>
                <h2 className="subtitle is-size-4 has-text-centered mb-6">{t("subtitle")}</h2>
                <div className="columns is-multiline">
                    {repos.map((repo) => (
                        <div key={repo.id} className="column is-4">
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
                                <p className="mb-5 ">{repo.description || "No description available."}</p>

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
