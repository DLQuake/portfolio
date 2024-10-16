"use client"; // Oznaczamy komponent jako klienta
import Image from 'next/image';

const WelcomeSection = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="columns is-vcentered">
                    <div className="column is-half">
                        <h1 className="title is-size-2">Hi There! 👋🏻</h1>
                        <h2 className="title is-size-2 is-uppercase">I&apos;m Dominik Lewczyński</h2>
                        <p className="title is-size-2">Frontend Developer</p>
                    </div>

                    <div className="column is-half">
                        <Image
                            src="/images/avataaars.svg"
                            alt="Twoje zdjęcie"
                            width={400}
                            height={300}
                            layout="responsive"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WelcomeSection;
