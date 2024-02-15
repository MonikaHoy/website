import skills from "./skillsData";
import style from "./SkillsList.module.css";

export default function SkillsList() {
  return (
    <div className={style.container}>
      <h1 className={style.header}>Skills</h1>
      {skills.map((skill) => (
        <div key={skill.name} className={style.contentContainer}>
          {skill.icon}
          <p>{skill.name}</p>
        </div>
      ))}
    </div>
  );
}
