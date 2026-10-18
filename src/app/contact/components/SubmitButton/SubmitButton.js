const SubmitButton = ({ text, loading = false }) => {
    return (
        <div className="field mt-5 has-text-centered">
            <button type="submit" className={`button is-link ${loading ? "is-loading" : ""}`} disabled={loading}>
                {text}
            </button>
        </div>
    );
};

export default SubmitButton;