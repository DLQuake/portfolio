"use client";
import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        alert("Wiadomość została wysłana!");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="section">
            <div className="container">
                <h1 className="title has-text-centered">Kontakt</h1>
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <label className="label">Imię</label>
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">E-mail</label>
                        <div className="control">
                            <input
                                className="input"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Wiadomość</label>
                        <div className="control">
                            <textarea
                                className="textarea"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                    </div>

                    <div className="field has-text-centered">
                        <div className="control">
                            <button type="submit" className="button is-primary">
                                Wyślij
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
