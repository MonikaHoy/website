import ExperienceList from "../../components/Experience/ExperienceList";
import style from "./WorkExperience.module.css";

export default function WorkExperience() {
  return (
    <section className={style.container}>
      <h1>Experience</h1>
      <ExperienceList />
    </section>
  );
}
