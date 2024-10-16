import { FaGlobe } from 'react-icons/fa';
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
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="icon">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="icon">
                            <FaLinkedinIn />
                        </a>
                        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="icon">
                            <FaXTwitter />
                        </a>
                        <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer" className="icon">
                            <FaGlobe />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
