type Projects = {
  title: string;
  url?: string;
  description: string;
  date?: number | string;
};

const projects: Projects[] = [
  {
    title: "grow",
    url: "https://github.com/MonikaHoy/grow",
    description:
      "Grow was my first mobile project and what made me want to be a mobile developer. Inspired from tracking my plants' health, I built a plant journal application to track my plants with images. I developed and built the app from scratch in React Native and Expo, using React Navigation and Firebase Cloud Firestore database. I recently moved it from Expo to React Native and refactored the code to TypeScript.",
    date: "2020 & 2024",
  },
];

export default projects;
