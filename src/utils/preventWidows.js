export const getLocaleFromCookies = () => {
    if (typeof document !== "undefined") {
        const match = document.cookie.match(/NEXT_LOCALE=([a-z-]+)/);
        return match ? match[1] : "en";
    }
    return "en";
};

export const preventWidows = (text, locale) => {
    if (locale !== "pl") return text;
    return text.replace(/\b([aiouwzAIUOWZ])\b\s/g, "$1\u00A0");
};
