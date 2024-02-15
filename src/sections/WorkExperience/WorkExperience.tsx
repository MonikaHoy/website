import ExperienceList from "../../components/Experience/ExperienceList";
import ProjectsList from "../../components/Experience/ProjectsList";
import style from "./WorkExperience.module.css";

interface ExperienceProps {
  isSmallScreen?: boolean;
}

export default function WorkExperience({ isSmallScreen }: ExperienceProps) {
  return (
    <section
      className={isSmallScreen ? style.containerCollapsed : style.container}
    >
      <div>
        <h1>Experience</h1>
        <ExperienceList />
      </div>
      <div className={style.projectsContainer}>
        <h1>Projects</h1>
        <ProjectsList />
      </div>
    </section>
  );
}
