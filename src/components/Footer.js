import { FaEnvelope } from 'react-icons/fa';
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {

    const startYear = process.env.NEXT_PUBLIC_START_YEAR;
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="columns is-vcentered">
                    <div className="column has-text-left has-text-centered-mobile">
                    </div>

                    <div className="column has-text-centered">
                        <p>
                            Copyright &#169; {startYear}
                            {startYear !== currentYear && `-${currentYear}`}
                            &nbsp;Dominik Lewczyński
                        </p>
                    </div>

                    <div className="column has-text-right has-text-centered-mobile">
                        <a href={process.env.NEXT_PUBLIC_GITHUB_LINK} aria-label='Visit my GitHub profile' target="_blank" rel="noopener noreferrer" className="icon">
                            <FaGithub />
                        </a>
                        <a href={process.env.NEXT_PUBLIC_LINKEDIN_LINK} aria-label='Visit my LinkedIn profile' target="_blank" rel="noopener noreferrer" className="icon">
                            <FaLinkedinIn />
                        </a>
                        <a href={process.env.NEXT_PUBLIC_X_LINK} aria-label='Visit my X profile' target="_blank" rel="noopener noreferrer" className="icon">
                            <FaXTwitter />
                        </a>
                        <a href={`mailto: ${process.env.NEXT_PUBLIC_EMAIL}`} aria-label='Send me an email' target="_blank" rel="noopener noreferrer" className="icon">
                            <FaEnvelope />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
