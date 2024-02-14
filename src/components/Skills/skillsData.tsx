import { FaJs, FaReact, FaFigma } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiJira } from "react-icons/si";

type Skill = {
  name: string;
  icon: JSX.Element | string;
};

const skills: Skill[] = [
  { name: "JavaScript", icon: <FaJs color="yellow" /> },
  { name: "TypeScript", icon: <BiLogoTypescript color="#0146b3" /> },
  { name: "React / React Native", icon: <FaReact color="#61dafb" /> },
  { name: "Figma", icon: <FaFigma color="indigo" /> },
  { name: "Jira", icon: <SiJira color="#0052cc" /> },
];

export default skills;
