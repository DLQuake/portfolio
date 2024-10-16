import Image from 'next/image';

const AboutMe = () => {
    return (
        <section className="section notification">
            <div className="container">
                <div className="columns is-vcentered">
                    <div className="column is-half">
                        <h2 className="title is-size-2 has-text-centered is-uppercase">Let me introduce myself</h2>
                        <div className='content is-size-5'>
                            <p>
                                I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
                            </p>
                            <p>
                                I am fluent in classics like <strong>C++, JavaScript, and Go</strong>.
                            </p>
                            <p>
                                My fields of interest are building new web technologies and products and also in areas related to <strong>Blockchain</strong>.
                            </p>
                            <p>
                                Whenever possible, I also apply my passion for developing products with <strong>Node.js</strong> and modern JavaScript libraries and frameworks like <strong>React.js and Next.js</strong>.
                            </p>
                        </div>
                    </div>

                    <div className="column is-half">
                        <Image
                            src="/images/avataaars.svg"
                            alt="Twoje zdjęcie"
                            width={200}
                            height={200}
                            layout="responsive"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
