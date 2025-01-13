"use client";
import { useState, useEffect } from "react";
import "./LanguageSwitcher.css";

const LanguageSwitcher = () => {
    const [selectedLanguage, setSelectedLanguage] = useState("en");

    useEffect(() => {
        const cookieLocale = document.cookie.split('; ').find(row => row.startsWith('NEXT_LOCALE='));
        if (cookieLocale) {
            setSelectedLanguage(cookieLocale.split('=')[1]);
        }
    }, []);

    const handleChange = (event) => {
        const locale = event.target.value;
        setSelectedLanguage(locale);
        document.cookie = `NEXT_LOCALE=${locale}; path=/`;
        window.location.reload();
    };

    return (
        <div className="select is-medium languageswitcher">
            <select aria-label="Change a language" value={selectedLanguage} onChange={handleChange}>
                <option value="en">English</option>
                <option value="pl">Polski</option>
            </select>
        </div>
    );
};

export default LanguageSwitcher;
