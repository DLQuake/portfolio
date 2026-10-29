
"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import "./WelcomeSection.css";

const WelcomeSection = () => {
    const t = useTranslations("HomePage");

    return (
        <section className="welcome-hero section">
            <div className="container">
                <div className="columns is-vcentered is-variable">
                    <div className="column is-6-desktop welcome-content">
                        <p className="title welcome-eyebrow">
                            <span className="wave-emoji" aria-hidden="true">
                                👋
                            </span>
                            {t("WelcomeSection.Hi")}
                        </p>

                        <h1 className="title welcome-title">
                            {process.env.NEXT_PUBLIC_NAME_SURNAME}
                        </h1>

                        <h2 className="subtitle welcome-role">
                            {process.env.NEXT_PUBLIC_JOB}
                        </h2>

                        <p className="content is-size-5 welcome-description has-text-justified">
                            {t("WelcomeSection.description")}
                        </p>

                        <div className="welcome-actions">
                            <Link href="/projects" className="button is-link is-medium welcome-primary-button">
                                {t("WelcomeSection.projectsButton")}
                            </Link>

                            <Link href="/about" className="button is-medium welcome-secondary-button">
                                {t("WelcomeSection.aboutButton")}
                            </Link>
                        </div>
                    </div>

                    <div className="column is-6-desktop welcome-image-column">
                        <div className="welcome-illustration">
                            <Image
                                src="/images/Source code-amico.svg"
                                alt={t("WelcomeSection.imageAlt")}
                                width={600}
                                height={450}
                                priority
                                sizes="(max-width: 768px) 90vw, 50vw"
                                style={{
                                    width: "100%",
                                    height: "auto",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WelcomeSection;
