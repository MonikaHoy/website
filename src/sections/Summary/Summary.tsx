import style from "./Summary.module.css";
import SkillsList from "../../components/Skills/SkillsList";
import { FaLinkedin, FaGlobe, FaGithub } from "react-icons/fa";
import picture from "../../assets/images/Monika.jpg";

interface SummaryProps {
  isSmallScreen?: boolean;
}

export default function Summary({ isSmallScreen }: SummaryProps) {
  return (
    <section
      className={isSmallScreen ? style.containerCollaped : style.container}
    >
      <div className={style.content}>
        <div className={style.imageContainer}>
          <img src={picture} alt="Monika" className={style.picture} />
        </div>
        <h2 className={style.name}>Monika Louise Bro Høy</h2>
        <div className={style.infoContainer}>
          <FaGlobe color="#DC2CF9" />
          <p>Berlin, Germany</p>
        </div>
        <div className={style.infoContainer}>
          <FaLinkedin color="blue" />
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
        <div className={style.infoContainer}>
          <FaGithub />
          <a
            href="https://github.com/MonikaHoy"
            title="Github"
            target="_blank"
            rel="noreferrer"
            className={style.link}
          >
            Github
          </a>
        </div>
      </div>

      <SkillsList />
    </section>
  );
}
