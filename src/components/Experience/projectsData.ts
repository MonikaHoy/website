type Projects = {
  title: string;
  description: string;
  date?: number;
};

const projects: Projects[] = [
  {
    title: "grow",
    description:
      "Grow was my first mobile project and what made me want to be a mobile developer. Inspired from tracking my plants' health, I built a plant journal application to track my plants with images. Developed and built an app from scratch in React Native and Expo, using React Navigation and Firebase Cloud Firestore database. Currently working on moving it from Expo to React Native and refactoring the code to TypeScript.",
    date: 2020,
  },
];

export default projects;
