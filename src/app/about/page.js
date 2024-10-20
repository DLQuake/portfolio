import Image from 'next/image';
import SkillSet from '../../components/SkillSet';
import { useTranslations } from 'next-intl';

const AboutPage = () => {
    const t = useTranslations('AboutPage');
    return (
        <>
            <div className="section">
                <div className="container">
                    <div className="columns is-vcentered">
                        <div className="column is-size-5 is-half content">
                            <h1 className='has-text-centered'>{t("aboutsection.title1")}</h1>
                            <h2 className='has-text-centered'>{t("aboutsection.title2")}</h2>
                            <h2>{t("aboutsection.aboutme.subtitle")}</h2>
                            <p>{t("aboutsection.aboutme.content")}</p>
                            <h2>{t("aboutsection.hobby.subtitle")}</h2>
                            <p>{t("aboutsection.hobby.content")}</p>
                        </div>
                        <div className="column is-half">
                            <Image
                                src="/images/photo.png"
                                alt="Moje zdjęcie"
                                width={571}
                                height={0}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div >
            <SkillSet />
        </>
    );
};

export default AboutPage;
