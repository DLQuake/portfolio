import { useTranslations } from 'next-intl';
import Image from 'next/image';

const IntroduceMe = () => {
    const t = useTranslations('HomePage');
    return (
        <section className="section notification">
            <div className="container">
                <div className="columns is-vcentered">
                    <div className="column is-half">
                        <h2 className="title is-size-2 has-text-centered is-uppercase">{t("IntroduceMeSection.title")}</h2>
                        <div className='content is-size-5 has-text-centered'>
                            <p>{t("IntroduceMeSection.content")}</p>
                        </div>
                    </div>

                    <div className="column is-half">
                        <Image
                            src="/images/avataaars.svg"
                            alt="My avatar"
                            width={600}
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

export default IntroduceMe;
