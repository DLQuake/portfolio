"use client";

import { useTranslations } from "next-intl";
import {
    FaRegUser,
    FaRegEnvelope,
    FaPhone,
    FaLinkedinIn,
    FaGithub,
    FaXTwitter,
} from "react-icons/fa6";
import "./ContactInfo.css";

const ContactInfo = () => {
    const t = useTranslations("ContactPage");

    const cleanPhoneNumber = (phoneNumber = "") =>
        phoneNumber.replace(/[^\d+]/g, "");

    const contactItems = [
        {
            key: "namesurname",
            value: process.env.NEXT_PUBLIC_NAME_SURNAME,
            icon: <FaRegUser />,
        },
        {
            key: "email",
            value: process.env.NEXT_PUBLIC_EMAIL,
            icon: <FaRegEnvelope />,
            href: `mailto:${process.env.NEXT_PUBLIC_EMAIL}`,
        },
        {
            key: "phone",
            value: process.env.NEXT_PUBLIC_PHONE_NUMBER,
            icon: <FaPhone />,
            href: `tel:${cleanPhoneNumber(
                process.env.NEXT_PUBLIC_PHONE_NUMBER
            )}`,
        },
        {
            key: "linkedin",
            value: process.env.NEXT_PUBLIC_LINKEDIN_TEXT,
            icon: <FaLinkedinIn />,
            href: process.env.NEXT_PUBLIC_LINKEDIN_LINK,
            external: true,
        },
        {
            key: "github",
            value: process.env.NEXT_PUBLIC_GITHUB_TEXT,
            icon: <FaGithub />,
            href: process.env.NEXT_PUBLIC_GITHUB_LINK,
            external: true,
        },
        {
            key: "x",
            value: process.env.NEXT_PUBLIC_X_TEXT,
            icon: <FaXTwitter />,
            href: process.env.NEXT_PUBLIC_X_LINK,
            external: true,
        },
    ];

    return (
        <section className="contact-info">
            <h2 className="subtitle is-4 contact-info-title">
                {t("contactinformation.title")}
            </h2>

            <div className="contact-info-list">
                {contactItems.map((item) => (
                    <div className="contact-info-item" key={item.key}>
                        <span className="contact-info-icon" aria-hidden="true">
                            {item.icon}
                        </span>

                        <div className="contact-info-content">
                            <p className="contact-info-label">
                                {t(`contactinformation.${item.key}`)}
                            </p>

                            {item.href ? (
                                <a
                                    className="contact_links"
                                    href={item.href}
                                    {...(item.external && {
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                    })}
                                >
                                    {item.value}
                                </a>
                            ) : (
                                <p className="contact-info-value">
                                    {item.value}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ContactInfo;