"use client";
import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { FaUser, FaEnvelope, FaComment } from 'react-icons/fa';
import { useTranslations } from "next-intl";
import FormField from "../FormField/FormField";
import SubmitButton from "../SubmitButton/SubmitButton";

const ContactForm = () => {
    const t = useTranslations('ContactPage');
    const form = useRef();

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
        <form ref={form} onSubmit={sendEmail}>
            <FormField
                label={t("contactform.fullname")}
                name="user_name"
                type="text"
                placeholder={t("contactform.fullname")}
                icon={<FaUser />}
                required
            />
            <FormField
                label={t("contactform.email")}
                name="user_email"
                type="email"
                placeholder={t("contactform.email")}
                icon={<FaEnvelope />}
                required
            />
            <FormField
                label={t("contactform.subject")}
                name="subject"
                type="text"
                placeholder={t("contactform.subject")}
                icon={<FaComment />}
                required
            />
            <FormField
                label={t("contactform.message")}
                name="message"
                type="textarea"
                placeholder={t("contactform.message")}
                rows="10"
                required
            />
            <SubmitButton text={t("contactform.button")} />
        </form>
    );
};

export default ContactForm;
