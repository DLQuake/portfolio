"use client";
import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { FaUser, FaEnvelope, FaComment } from 'react-icons/fa';

const Contact = () => {
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
        <div className="section">
            <div className="container">
                <h1 className="title has-text-centered">Contact</h1>
                <div className="columns is-centered">
                    <div className="column is-two-thirds">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="field">
                                <label className="label">Full Name</label>
                                <div className="control has-icons-left">
                                    <input
                                        type="text"
                                        className="input"
                                        name="user_name"
                                        placeholder="Full Name"
                                        required
                                    />
                                    <span className="icon m-0 is-size-6 is-small is-left">
                                        <FaUser />
                                    </span>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Email</label>
                                <div className="control has-icons-left">
                                    <input
                                        type="email"
                                        className="input"
                                        name="user_email"
                                        placeholder="Email"
                                        required
                                    />
                                    <span className="icon m-0 is-size-6 is-small is-left">
                                        <FaEnvelope />
                                    </span>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Subject</label>
                                <div className="control has-icons-left">
                                    <input
                                        type="text"
                                        className="input"
                                        name="subject"
                                        placeholder="Subject"
                                        required
                                    />
                                    <span className="icon m-0 is-size-6 is-small is-left">
                                        <FaComment />
                                    </span>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Message</label>
                                <div className="control">
                                    <textarea
                                        className="textarea"
                                        rows="10"
                                        name="message"
                                        placeholder="Message..."
                                        required
                                    ></textarea>
                                </div>
                            </div>
                            <div className="field mt-5 has-text-centered">
                                <button type="submit" className="button is-link">
                                    Send a Message
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="column">
                        <div className="content">
                            <h2 className="subtitle">Contact Information</h2>
                            <p><strong>Name and surname:</strong> {process.env.NEXT_PUBLIC_NAME_SURNAME} </p>
                            <p><strong>Email:</strong> {process.env.NEXT_PUBLIC_EMAIL}</p>
                            <p><strong>Phone:</strong> {process.env.NEXT_PUBLIC_PHONE_NUMBER}</p>
                            <p><strong>LinkedIn:</strong> <a href={process.env.NEXT_PUBLIC_LINKEDIN_LINK} target="_blank" rel="noopener noreferrer">{process.env.NEXT_PUBLIC_LINKEDIN_TEXT}</a></p>
                            <p><strong>GitHub:</strong> <a href={process.env.NEXT_PUBLIC_GITHUB_LINK} target="_blank" rel="noopener noreferrer">{process.env.NEXT_PUBLIC_GITHUB_TEXT}</a></p>
                            <p><strong>X:</strong> <a href={process.env.NEXT_PUBLIC_X_LINK} target="_blank" rel="noopener noreferrer">{process.env.NEXT_PUBLIC_X_TEXT}</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
