"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
    FaUser,
    FaEnvelope,
    FaComment,
} from "react-icons/fa";
import { useTranslations } from "next-intl";
import FormField from "../FormField/FormField";
import SubmitButton from "../SubmitButton/SubmitButton";

const ContactForm = () => {
    const t = useTranslations("ContactPage");
    const form = useRef(null);

    const [status, setStatus] = useState("idle");

    const sendEmail = async (e) => {
        e.preventDefault();

        if (!form.current || status === "sending") return;

        setStatus("sending");

        try {
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                form.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            );

            form.current.reset();
            setStatus("success");
        } catch (error) {
            console.error("EmailJS error:", error);
            setStatus("error");
        }
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
                rows={8}
                required
            />

            {status !== "idle" && (
                <div
                    className={`notification ${
                        status === "success"
                            ? "is-success"
                            : status === "error"
                              ? "is-danger"
                              : "is-info"
                    } is-light`}
                    role="status"
                    aria-live="polite"
                >
                    {status === "sending" && t("contactform.sending")}
                    {status === "success" && t("contactform.success")}
                    {status === "error" && t("contactform.error")}
                </div>
            )}

            <SubmitButton
                text={t("contactform.button")}
                loading={status === "sending"}
            />
        </form>
    );
};

export default ContactForm;