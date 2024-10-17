"use client";
import Image from 'next/image';

const WelcomeSection = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="columns is-vcentered">
                    <div className="column is-half">
                        <h1 className="title is-size-2">
                            Hi There! <span className="wave-emoji">👋🏻</span>
                        </h1>
                        <h2 className="title is-size-2 is-uppercase">I&apos;m Dominik Lewczyński</h2>
                        <p className="title is-size-2">Frontend Developer</p>
                    </div>

                    <div className="column is-half">
                        <Image
                            src="/images/draw.png"
                            alt="Twoje zdjęcie"
                            width={700}
                            height={0}
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WelcomeSection;
