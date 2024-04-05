import experience from "./experienceData";
import style from "./ExperienceList.module.css";

export default function ExperienceList() {
  return (
    <div className={style.container}>
      {experience.map((exp, index) => (
        <div key={index}>
          <div className={style.headerContainer}>
            <h2>{exp.title}</h2>
            <p>
              {exp.startDate} - {exp.endDate === "" ? "Present" : exp.endDate}
            </p>
          </div>
          <p>
            <a href={exp.url} target="_blank" rel="noreferrer">
              @{exp.company}{" "}
            </a>
          </p>
          <div className={style.body}>
            <p>{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
