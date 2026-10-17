import SkillSet from './components/SkillSet/SkillSet';
import AboutMe from './components/AboutMe/AboutMe';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education'

const AboutPage = () => {
    return (
        <div className='aboutPage'>
            <AboutMe />
            <Experience />
            <SkillSet />
            <Education />
        </div>
    );
};

export default AboutPage;
