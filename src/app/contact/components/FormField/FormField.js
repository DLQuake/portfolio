import React from "react";

const FormField = ({ label, name, type = "text", placeholder, icon, rows, required }) => {
    return (
        <div className="field">
            <label className="label">{label}</label>
            <div className="control has-icons-left">
                {type === "textarea" ? (
                    <textarea
                        className="textarea"
                        name={name}
                        placeholder={placeholder}
                        rows={rows || 5}
                        required={required}
                    ></textarea>
                ) : (
                    <input
                        type={type}
                        className="input"
                        name={name}
                        placeholder={placeholder}
                        required={required}
                    />
                )}
                {icon && type !== "textarea" && (
                    <span className="icon m-0 is-size-6 is-small is-left">
                        {icon}
                    </span>
                )}
            </div>
        </div>
    );
};

export default FormField;
