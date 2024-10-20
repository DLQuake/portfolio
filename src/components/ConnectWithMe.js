import { useTranslations } from 'next-intl';
import { FaEnvelope } from 'react-icons/fa';
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const ConnectWithMe = () => {
    const t = useTranslations('HomePage');
    return (
        <section className="section">
            <div className="container">
                <h2 className="title has-text-centered is-uppercase is-size-2">{t("ConnectWithMeSection.title")}</h2>
                <p className="has-text-centered is-size-5">{t("ConnectWithMeSection.subtitle")}</p>
                <div className="buttons is-centered mt-5">
                    <a href={process.env.NEXT_PUBLIC_GITHUB_LINK} target="_blank" className="button is-light is-rounded">
                        <FaGithub className="icon" />
                    </a>
                    <a href={process.env.NEXT_PUBLIC_LINKEDIN_LINK} target="_blank" className="button is-light is-rounded">
                        <FaLinkedinIn className="icon" />
                    </a>
                    <a href={process.env.NEXT_PUBLIC_X_LINK} target="_blank" className="button is-light is-rounded">
                        <FaXTwitter className="icon" />
                    </a>
                    <a  href={`mailto: ${process.env.NEXT_PUBLIC_EMAIL}`} target="_blank" className="button is-light is-rounded">
                        <FaEnvelope className="icon" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ConnectWithMe;
