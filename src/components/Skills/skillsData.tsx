import { FaJs, FaReact, FaFigma, FaHtml5, FaCss3 } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiJira } from "react-icons/si";

type Skill = {
  name: string;
  icon: JSX.Element | string;
};

const skills: Skill[] = [
  { name: "React / React Native", icon: <FaReact color="#61dafb" /> },
  { name: "JavaScript", icon: <FaJs color="#F6BE00" /> },
  { name: "TypeScript", icon: <BiLogoTypescript color="#0146b3" /> },
  { name: "HTML", icon: <FaHtml5 color="#e34c26" /> },
  { name: "CSS", icon: <FaCss3 color="indigo" /> },
  { name: "Figma", icon: <FaFigma color="#e75480" /> },
  { name: "Jira", icon: <SiJira color="#0052cc" /> },
];

export default skills;
