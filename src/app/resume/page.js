"use client"; // Oznaczamy komponent jako klienta
import React from "react";
import { AiOutlineDownload } from "react-icons/ai";

const Resume = () => {
    return (
        <div className="section">
            <div className="container">
                <div className="buttons is-centered mb-5">
                    <a
                        href="/Dominik_Lewczyński_CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button is-link"
                    >
                        <AiOutlineDownload /> Download CV
                    </a>
                </div>
                <div className="content has-text-centered">
                    <iframe
                        src="/Dominik_Lewczyński_CV.pdf"
                        width="100%"
                        height="1100px"
                        style={{ border: 'none' }}
                    />
                </div>
                <div className="buttons is-centered mb-5">
                    <a
                        href="/Dominik_Lewczyński_CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button is-link"
                    >
                        <AiOutlineDownload /> Download CV
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Resume;
