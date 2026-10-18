import { useTranslations } from 'next-intl';
import { AiOutlineDownload } from 'react-icons/ai';

const DownloadCVButton = ({ pdfUrl, mt = 6, mb = 6 }) => {
    const t = useTranslations('ResumePage');
    return (
        <div className={`buttons is-centered mt-${mt} mb-${mb}`}>
            <a href={pdfUrl} target="_blank" rel="noopener noreferrer" download className="button is-link">
                <AiOutlineDownload /> {t("button")}
            </a>
        </div>
    );
};

export default DownloadCVButton;
