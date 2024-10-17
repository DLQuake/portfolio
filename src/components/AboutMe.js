import Image from 'next/image';

const AboutMe = () => {
    return (
        <section className="section notification">
            <div className="container">
                <div className="columns is-vcentered">
                    <div className="column is-half">
                        <h2 className="title is-size-2 has-text-centered is-uppercase">Let me introduce myself</h2>
                        <div className='content is-size-5 has-text-justified'>
                            <p>
                                I am passionate about creating modern web applications and continually expanding my skill set. 💻
                            </p>
                            <p>
                                My expertise lies in technologies such as <strong>JavaScript, React, and Next.js</strong>.
                            </p>
                            <p>
                                I enjoy exploring innovative solutions and am particularly interested in areas like <strong>Data Science and Machine Learning</strong>.
                            </p>
                            <p>
                                In addition, I have experience with <strong>Node.js</strong> for backend development, which allows me to build full-stack applications efficiently.
                            </p>

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
