import Image from 'next/image';
import SkillSet from '../../components/SkillSet';

const AboutPage = () => {
    return (
        <>
            <div className="section">
                <div className="container">
                    <div className="columns is-vcentered">
                        <div className="column is-size-5 is-half content">
                            <h1 className='has-text-centered'>Hello everyone, my name is Dominik!</h1>
                            <h2 className='has-text-centered'>I am a Frontend Developer.</h2>

                            <h2>About Me</h2>
                            <p>
                                I am a Frontend Developer with a passion for creating modern websites.
                                I have over a year of experience in the IT industry, mainly in the field of technology, information, and the Internet.
                                I graduated with a Master&apos;s degree in Computer Science from the University of Warmia and Mazury in Olsztyn, specializing in &quot;Data Science in practice.&quot;
                            </p>
                            <p>I am a person who is:</p>
                            <ul>
                                <li>Organized and focused on achieving goals</li>
                                <li>Communicative</li>
                                <li>Eager to develop</li>
                                <li>Open to new challenges and experiences</li>
                            </ul>

                            <h2>Hobbies</h2>
                            <p>
                                Besides my professional interests, I am passionate about new technologies.
                                Additionally, I have an interest in astronomy and aviation.
                                These areas not only intrigue me but also motivate me to continue learning and exploring.
                            </p>
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
