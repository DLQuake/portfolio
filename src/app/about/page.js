import Image from 'next/image';
import SkillSet from '../../components/SkillSet';

const AboutPage = () => {
    return (
        <>
            <div className="section">
                <div className="container">
                    <div className="columns is-vcentered">
                        <div className="column is-size-5 is-half content has-text-justified">
                            <h1 className="title is-size-2 has-text-centered">About me</h1>
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
            </div>
            <SkillSet />
        </>
    );
};

export default AboutPage;
