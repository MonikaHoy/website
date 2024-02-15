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
      "Equalista is the first gender equality learning app, created in a small but fiery start up that's revolutionising a, so far, untouched app topic. At Equalista I am keeping the app up to date and adding new features",
  },
  {
    title: "React Native Engineer",
    company: "LIVEBUY",
    location: "Berlin",
    startDate: "2022",
    endDate: "2023",
    description:
      "Bug fixing and maintaining code for React and Rect Native apps in React and React Native. Contributing with feature development & code reviews. Writing tests with Jest and E2E tests with Detox. Close team collaboration agile style with other developers, designers, QA & product owners",
  },
  {
    title: "Mobile Developer",
    company: "Equalista",
    location: "Berlin",
    startDate: "2021",
    endDate: "2022",
    description:
      "Build a self-test feature with calculation of score, separate navigation and saving results to a database.  Developed a new app version pop-up using cloud functions. 	Build a profile tab with user progress and a new daily quote.",
  },
  {
    title: "Frontend Developer intern",
    company: "Equalista",
    location: "Berlin",
    startDate: "2021",
    endDate: "2021",
    description:
      "Implemented a database structure to store in-app user answers securely. Added categories for sorting learning courses in the app.",
  },
  {
    title: "Content Researcher",
    company: "Equalista",
    location: "Berlin",
    startDate: "2020",
    endDate: "2021",
    description: "Researched, selected and wrote content for learning courses.",
  },
  {
    title: "Localisation Specialist",
    company: "KAYAK",
    location: "Berlin",
    startDate: "2021",
    endDate: "2022",
    description:
      "Localized product and marketing content for KAYAK websites and apps, and do linguistic quality and functionality checks (LQA). Edited and translated HTML strings handling different conditions",
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
