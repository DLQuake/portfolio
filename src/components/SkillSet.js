const skills = [
    "JavaScript",
    "React",
    "Next.js",
    "CSS",
    "HTML",
    "Node.js",
    "Git",
    "Python",
    "Data Science",
];

const SkillSet = () => {
    return (
        <div className="section">
            <div className="container">
                <h2 className="title has-text-centered">Umiejętności</h2>
                <div className="columns is-multiline">
                    {skills.map((skill, index) => (
                        <div key={index} className="column is-3">
                            <div className="box has-text-centered">
                                <p className="title">{skill}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillSet;
