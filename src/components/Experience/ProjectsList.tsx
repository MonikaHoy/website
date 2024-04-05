import style from "./ExperienceList.module.css";
import projects from "./projectsData";

export default function ProjectsList() {
  return (
    <div className={style.container}>
      {projects.map((proj, index) => (
        <div key={index}>
          <div className={style.headerContainer}>
            <h2>
              <a href={proj.url} target="_blank" rel="noreferrer">
                {proj.title}{" "}
              </a>
            </h2>

            <p>{proj.date ? proj.date : null}</p>
          </div>
          <div className={style.body}>
            <p>{proj.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
