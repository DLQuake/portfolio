"use client";
import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { FaUser, FaEnvelope, FaComment } from 'react-icons/fa';
import { useTranslations } from "next-intl";

const Contact = () => {
    const t = useTranslations('ContactPage');
    const form = useRef();
    const cleanPhoneNumber = (phoneNumber) => phoneNumber.replace(/\s+/g, '').replace(/-/g, '');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            form.current,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                console.log(result.text);
                alert("Your message has been sent successfully!");
            }, (error) => {
                console.log(error.text);
                alert("There was an error sending your message. Please try again.");
            });
        e.target.reset();
    };

    return (
        <div className="section">
            <div className="container">
                <h1 className="title has-text-centered">{t("title")}</h1>
                <div className="columns is-centered">
                    <div className="column is-two-thirds">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="field">
                                <label className="label">{t("contactform.fullname")}</label>
                                <div className="control has-icons-left">
                                    <input
                                        type="text"
                                        className="input"
                                        name="user_name"
                                        placeholder={t("contactform.fullname")}
                                        required
                                    />
                                    <span className="icon m-0 is-size-6 is-small is-left">
                                        <FaUser />
                                    </span>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">{t("contactform.email")}</label>
                                <div className="control has-icons-left">
                                    <input
                                        type="email"
                                        className="input"
                                        name="user_email"
                                        placeholder={t("contactform.email")}
                                        required
                                    />
                                    <span className="icon m-0 is-size-6 is-small is-left">
                                        <FaEnvelope />
                                    </span>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">{t("contactform.subject")}</label>
                                <div className="control has-icons-left">
                                    <input
                                        type="text"
                                        className="input"
                                        name="subject"
                                        placeholder={t("contactform.subject")}
                                        required
                                    />
                                    <span className="icon m-0 is-size-6 is-small is-left">
                                        <FaComment />
                                    </span>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">{t("contactform.message")}</label>
                                <div className="control">
                                    <textarea
                                        className="textarea"
                                        rows="10"
                                        name="message"
                                        placeholder={t("contactform.message")}
                                        required
                                    ></textarea>
                                </div>
                            </div>
                            <div className="field mt-5 has-text-centered">
                                <button type="submit" className="button is-link">
                                    {t("contactform.button")}
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="column">
                        <div className="content">
                            <h2 className="subtitle">{t("contactinformation.title")}</h2>
                            <p><strong>{t("contactinformation.namesurname")}:</strong> {process.env.NEXT_PUBLIC_NAME_SURNAME} </p>
                            <p><strong>{t("contactinformation.email")}:</strong> <a className="contact_links" href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}>{process.env.NEXT_PUBLIC_EMAIL}</a></p>
                            <p><strong>{t("contactinformation.phone")}:</strong> <a className="contact_links" href={`tel:${cleanPhoneNumber(process.env.NEXT_PUBLIC_PHONE_NUMBER)}`}>{process.env.NEXT_PUBLIC_PHONE_NUMBER}</a></p>
                            <p><strong>{t("contactinformation.linkedin")}:</strong> <a className="contact_links" href={process.env.NEXT_PUBLIC_LINKEDIN_LINK} target="_blank" rel="noopener noreferrer">{process.env.NEXT_PUBLIC_LINKEDIN_TEXT}</a></p>
                            <p><strong>{t("contactinformation.github")}:</strong> <a className="contact_links" href={process.env.NEXT_PUBLIC_GITHUB_LINK} target="_blank" rel="noopener noreferrer">{process.env.NEXT_PUBLIC_GITHUB_TEXT}</a></p>
                            <p><strong>{t("contactinformation.x")}:</strong> <a className="contact_links" href={process.env.NEXT_PUBLIC_X_LINK} target="_blank" rel="noopener noreferrer">{process.env.NEXT_PUBLIC_X_TEXT}</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
