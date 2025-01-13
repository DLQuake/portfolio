import { useTranslations } from "next-intl";
import Link from "next/link";

export default function NotFound() {
    const t = useTranslations('NotFound');

    return (
        <section className="hero notification is-fullheight">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <h1 className="title is-1">{t("title")}</h1>
                    <p className="subtitle is-3">{t("subtitle")}</p>
                    <p className="is-size-4 mb-5">{t("content")}</p>
                    <Link href="/" className="button is-link is-medium">{t("button")}</Link>
                </div>
            </div>
        </section>
    );
}
