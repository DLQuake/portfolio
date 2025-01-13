import { useTranslations } from 'next-intl';
import { AiOutlineDownload } from 'react-icons/ai';

const DownloadCVButton = ({ pdfUrl }) => {
    const t = useTranslations('ResumePage');
    return (
        <div className="buttons is-centered my-6">
            <a href={pdfUrl} target="_blank" rel="noopener noreferrer" download className="button is-link">
                <AiOutlineDownload /> {t("button")}
            </a>
        </div>
    );
};

export default DownloadCVButton;
