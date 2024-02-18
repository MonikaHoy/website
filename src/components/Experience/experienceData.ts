type Experience = {
  title: string;
  company: string;
  location: string;
  endDate: string;
  description: string;
  startDate: string;
};

const experience: Experience[] = [
  {
    title: "Mobile Developer",
    company: "Equalista",
    location: "Berlin",
    startDate: "2023",
    endDate: "",
    description:
      "Equalista is the first gender equality learning app, created in a small but fiery start-up that's revolutionising this topic. At Equalista I am keeping the app up to date and adding new features. I am also in charge of builds and releases",
  },
  {
    title: "React Native Engineer",
    company: "LIVEBUY",
    location: "Berlin",
    startDate: "2022",
    endDate: "2023",
    description:
      "Livebuy provides streaming software for (live) video shopping. As a React Native Engineer, I worked with bug fixing and maintaining code for the Livebuy apps in React and React Native. I furthermore contributed with feature development & code reviews, and writing tests with Jest and E2E tests with Detox. The team collaboration was agile and close with other developers, designers, QA & product owners",
  },
  {
    title: "Mobile Developer",
    company: "Equalista",
    location: "Berlin",
    startDate: "2021",
    endDate: "2022",
    description:
      "As a mobile developer I took part in building features such as: a) a self-test feature with calculation of score, separate navigation and saving results to a database. b) Developed a new app version pop-up using cloud functions. c) Build a profile tab with user progress and a new daily quote.",
  },
  {
    title: "Frontend Developer intern",
    company: "Equalista",
    location: "Berlin",
    startDate: "2021",
    endDate: "2021",
    description:
      "I implemented a database structure to store in-app user answers securely, as well as added categories for sorting learning courses in the Equalista app.",
  },
  {
    title: "Content Researcher",
    company: "Equalista",
    location: "Berlin",
    startDate: "2020",
    endDate: "2021",
    description:
      "Researched, selected and wrote content for learning courses in the Equalista gender equality learning app",
  },
  {
    title: "Localisation Specialist",
    company: "KAYAK",
    location: "Berlin",
    startDate: "2021",
    endDate: "2022",
    description:
      "Kayak produces high quality travel related content, and as a localisation specialist, I translated product and marketing content for the KAYAK websites and apps. I also performed linguistic quality and functionality checks (LQA)",
  },
  {
    title: "Online News Editor and Translator",
    company: "Wundermedia",
    location: "Berlin",
    startDate: "2019",
    endDate: "2020",
    description:
      "Optimized and edited content for Microsoft News’ website via user engagement analysis and SEO. Localized and translated articles from English to Danish",
  },
];

export default experience;
