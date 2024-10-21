import Link from "next/link";

export default function NotFound() {
    return (
        <section className="hero is-fullheight">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <h1 className="title is-1">404</h1>
                    <p className="subtitle is-3">Page Not Found</p>
                    <p className="mb-5">Sorry, the page you are looking for doesn&apos;t exist.</p>
                    <Link href="/" className="button is-link is-medium">
                        Back to Home
                    </Link>
                </div>
            </div>
        </section>
    );
}
