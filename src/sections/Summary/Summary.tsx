import style from "./Summary.module.css";
import SkillsList from "../../components/Skills/SkillsList";
import { FaLinkedin, FaGlobe } from "react-icons/fa";
import picture from "../../assets/images/Monika.jpg";

export default function Summary() {
  return (
    <section className={style.container}>
      <div className={style.content}>
        <div className={style.imageContainer}>
          <img src={picture} alt="Monika" className={style.picture} />
        </div>
        <h2 className={style.name}>Monika Louise Bro Høy</h2>
        <div className={style.infoContainer}>
          <FaGlobe color="#DC2CF9" />
          <p>Berlin</p>
        </div>
        <div className={style.infoContainer}>
          <FaLinkedin />
          <a
            href="https://www.linkedin.com/in/monika-h%C3%B8y-46aa47138/"
            title="LinkedIn"
            target="_blank"
            rel="noreferrer"
            className={style.link}
          >
            LinkedIn
          </a>
        </div>
      </div>

      <SkillsList />
    </section>
  );
}