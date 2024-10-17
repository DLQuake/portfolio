import { FaEnvelope, FaGlobe } from 'react-icons/fa';
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="columns is-vcentered">
                    <div className="column has-text-left has-text-centered-mobile">
                    </div>

                    <div className="column has-text-centered">
                        <p>Copyright © 2024 Dominik Lewczyński</p>
                    </div>

                    <div className="column has-text-right has-text-centered-mobile">
                        <a href={process.env.NEXT_PUBLIC_GITHUB_LINK} target="_blank" rel="noopener noreferrer" className="icon">
                            <FaGithub />
                        </a>
                        <a href={process.env.NEXT_PUBLIC_LINKEDIN_LINK} target="_blank" rel="noopener noreferrer" className="icon">
                            <FaLinkedinIn />
                        </a>
                        <a href={process.env.NEXT_PUBLIC_X_LINK} target="_blank" rel="noopener noreferrer" className="icon">
                            <FaXTwitter />
                        </a>
                        <a href={`mailto: ${process.env.NEXT_PUBLIC_EMAIL}`} target="_blank" rel="noopener noreferrer" className="icon">
                            <FaEnvelope />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
