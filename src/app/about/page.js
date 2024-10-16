import Image from 'next/image';
import SkillSet from '../../components/SkillSet';

const AboutPage = () => {
    return (
        <>
            <div className="section">
                <div className="container">
                    <div className="columns is-vcentered">
                        <div className="column is-half">
                            <Image
                                src="/images/avataaars.svg" // Upewnij się, że ścieżka do zdjęcia jest poprawna
                                alt="Moje zdjęcie"
                                width={400}
                                height={400}
                                layout="responsive"
                                priority
                            />
                        </div>
                        <div className="column is-half content">
                            <h1 className="title has-text-centered">O mnie</h1>
                            <p>
                                I am a Frontend Developer with a passion for creating modern websites.
                                I have more than a year of experience in the IT industry, mainly in the field
                                of technology, information and Internet. I graduated with a Master&apos;s degree in
                                Computer Science from the University of Warmia and Mazury in Olsztyn,
                                specialising in ‘Data Science in practice’.
                            </p>
                            <p>
                                I am a person:
                            </p>
                            <ul>
                                <li>Organised and focused on achieving goals</li>
                                <li>Communicative</li>
                                <li>Eager to develop</li>
                                <li>Open to new challenges and experiences</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <SkillSet />
        </>
    );
};

export default AboutPage;
