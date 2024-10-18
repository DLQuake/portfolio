import { AiOutlineDownload } from 'react-icons/ai';

const DownloadCVButton = ({ pdfUrl }) => {
    return (
        <div className="buttons is-centered my-6">
            <a href={pdfUrl} target="_blank" rel="noopener noreferrer" download className="button is-link">
                <AiOutlineDownload /> Download CV
            </a>
        </div>
    );
};

export default DownloadCVButton;
