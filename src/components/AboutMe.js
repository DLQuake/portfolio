import Image from 'next/image';

const AboutMe = () => {
    return (
        <section className="section notification">
            <div className="container">
                <div className="columns is-vcentered">
                    <div className="column is-half">
                        <h2 className="title is-size-2 has-text-centered is-uppercase">Let me introduce myself</h2>
                        <div className='content is-size-5 has-text-centered'>
                            <p>
                                Hi! My name is Dominik, and I am passionate about creating modern web applications.
                                I am fascinated by the world of frontend development, and my goal is to continuously improve myself as a skilled Frontend Developer.
                                Every day, I dedicate time to learning in order to stay up-to-date with the latest trends and technological solutions.
                                I love exploring innovative approaches to problem-solving.
                                Besides programming, I am also interested in Astronomy and Aviation.
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
