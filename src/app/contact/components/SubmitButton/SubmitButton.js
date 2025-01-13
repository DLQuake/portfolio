import React from "react";

const SubmitButton = ({ text }) => {
    return (
        <div className="field mt-5 has-text-centered">
            <button type="submit" className="button is-link">
                {text}
            </button>
        </div>
    );
};

export default SubmitButton;
