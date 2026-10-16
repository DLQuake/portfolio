import SkillSet from './components/SkillSet/SkillSet';
import AboutMe from './components/AboutMe/AboutMe';
import Experience from './components/Experience/Experience';

const AboutPage = () => {
    return (
        <div className='aboutPage'>
            <AboutMe />
            <Experience />
            <SkillSet />
        </div>
    );
};

export default AboutPage;
