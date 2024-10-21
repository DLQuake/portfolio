"use client";
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const WelcomeSection = () => {
    const t = useTranslations('HomePage');

    return (
        <section className="section">
            <div className="container">
                <div className="columns is-vcentered">
                    <div className="column is-half">
                        <h1 className="title is-size-2">
                        {t("WelcomeSection.Hi")} <span className="wave-emoji">👋🏻</span>
                        </h1>
                        <h2 className="title is-size-2 mb-6 is-uppercase">{t("WelcomeSection.me")} {process.env.NEXT_PUBLIC_NAME_SURNAME}</h2>
                        <p className="title is-size-2">{process.env.NEXT_PUBLIC_JOB}</p>
                    </div>

                    <div className="column is-half">
                        <Image
                            src="/images/draw.png"
                            alt="Twoje zdjęcie"
                            width={700}
                            height={0}
                            priority
                            style={{ width: '100%' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WelcomeSection;
