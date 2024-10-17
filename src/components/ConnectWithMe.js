import Link from 'next/link';
import { FaEnvelope } from 'react-icons/fa';
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const ConnectWithMe = () => {
    return (
        <section className="section">
            <div className="container">
                <h2 className="title has-text-centered is-uppercase is-size-2">Find me on</h2>
                <p className="has-text-centered is-size-5">Feel free to connect with me</p>
                <div className="buttons is-centered mt-5">
                    <Link href={process.env.NEXT_PUBLIC_GITHUB_LINK} target="_blank" className="button is-light is-rounded">
                        <FaGithub className="icon" />
                    </Link>
                    <Link href={process.env.NEXT_PUBLIC_LINKEDIN_LINK} target="_blank" className="button is-light is-rounded">
                        <FaLinkedinIn className="icon" />
                    </Link>
                    <Link href={process.env.NEXT_PUBLIC_X_LINK} target="_blank" className="button is-light is-rounded">
                        <FaXTwitter className="icon" />
                    </Link>
                    <Link  href={`mailto: ${process.env.NEXT_PUBLIC_EMAIL}`} target="_blank" className="button is-light is-rounded">
                        <FaEnvelope className="icon" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ConnectWithMe;
