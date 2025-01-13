"use client";
import React from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactInfo from "./components/ContactInfo/ContactInfo";
import { useTranslations } from "next-intl";

const Contact = () => {
    const t = useTranslations('ContactPage');

    return (
        <div className="section">
            <div className="container">
                <h1 className="title has-text-centered">{t("title")}</h1>
                <div className="columns is-centered">
                    <div className="column is-two-thirds">
                        <ContactForm />
                    </div>
                    <div className="column">
                        <ContactInfo />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
