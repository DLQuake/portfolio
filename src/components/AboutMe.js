import { useTranslations } from 'next-intl';
import Image from 'next/image';

const AboutMe = () => {
    const t = useTranslations('HomePage');
    return (
        <section className="section notification">
            <div className="container">
                <div className="columns is-vcentered">
                    <div className="column is-half">
                        <h2 className="title is-size-2 has-text-centered is-uppercase">{t("AboutMeSection.title")}</h2>
                        <div className='content is-size-5 has-text-centered'>
                            <p>{t("AboutMeSection.content")}</p>
                        </div>
                    </div>

                    <div className="column is-half">
                        <Image
                            src="/images/avataaars.svg"
                            alt="Twoje zdjęcie"
                            width={600}
                            height={0}
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
