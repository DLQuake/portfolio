"use client";
import React from "react";
import { useTranslations } from "next-intl";
import "./ContactInfo.css"

const ContactInfo = () => {
    const t = useTranslations('ContactPage');

    const cleanPhoneNumber = (phoneNumber) => phoneNumber.replace(/\s+/g, '').replace(/-/g, '');

    return (
        <div className="content">
            <h2 className="subtitle">{t("contactinformation.title")}</h2>
            <p><strong>{t("contactinformation.namesurname")}:</strong> {process.env.NEXT_PUBLIC_NAME_SURNAME} </p>
            <p><strong>{t("contactinformation.email")}:</strong> <a className="contact_links" href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}>{process.env.NEXT_PUBLIC_EMAIL}</a></p>
            <p><strong>{t("contactinformation.phone")}:</strong> <a className="contact_links" href={`tel:${cleanPhoneNumber(process.env.NEXT_PUBLIC_PHONE_NUMBER)}`}>{process.env.NEXT_PUBLIC_PHONE_NUMBER}</a></p>
            <p><strong>{t("contactinformation.linkedin")}:</strong> <a className="contact_links" href={process.env.NEXT_PUBLIC_LINKEDIN_LINK} target="_blank" rel="noopener noreferrer">{process.env.NEXT_PUBLIC_LINKEDIN_TEXT}</a></p>
            <p><strong>{t("contactinformation.github")}:</strong> <a className="contact_links" href={process.env.NEXT_PUBLIC_GITHUB_LINK} target="_blank" rel="noopener noreferrer">{process.env.NEXT_PUBLIC_GITHUB_TEXT}</a></p>
            <p><strong>{t("contactinformation.x")}:</strong> <a className="contact_links" href={process.env.NEXT_PUBLIC_X_LINK} target="_blank" rel="noopener noreferrer">{process.env.NEXT_PUBLIC_X_TEXT}</a></p>
        </div>
    );
};

export default ContactInfo;
