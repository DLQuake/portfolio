import { useTranslations } from "next-intl";
import { SkillCategories } from "./SkillCategories";


const SkillSet = () => {
    const t = useTranslations('AboutPage');
    return (
        <div className="section notification mb-0">
            <div className="container">
                <h2 className="title is-size-2 has-text-centered">{t("skills.title")}</h2>

                {SkillCategories.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="mb-6">
                        <h3 className="subtitle is-size-3 has-text-centered">{t(`skills.${category.category}`)}</h3>
                        <div className="columns is-centered is-multiline">
                            {category.skills.map((skill, skillIndex) => (
                                <div key={skillIndex} className="column is-3 skill-card">
                                    <div className="box is-1 has-text-centered">
                                        <div className="icon is-size-1 is-large">{skill.icon}</div>
                                        <p className="title">{skill.name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillSet;
