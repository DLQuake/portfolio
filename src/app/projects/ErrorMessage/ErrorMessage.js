import React from "react";

const ErrorMessage = ({ message }) => {
    return (
        <div className="hero notification is-fullheight">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <p className="title">{message}</p>
                </div>
            </div>
        </div>
    );
};

export default ErrorMessage;
