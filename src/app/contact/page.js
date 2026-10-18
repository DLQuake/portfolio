"use client";

import ContactForm from "./components/ContactForm/ContactForm";
import ContactInfo from "./components/ContactInfo/ContactInfo";
import { useTranslations } from "next-intl";

const Contact = () => {
    const t = useTranslations('ContactPage');

    return (
        <div className="section notification">
            <div className="container">
                <header className="mt-4 mb-6 has-text-centered">
                    <h1 className="title is-size-2">{t("title")}</h1>
                    <p className="subtitle is-5 contact-description">{t("description")}</p>
                </header>
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