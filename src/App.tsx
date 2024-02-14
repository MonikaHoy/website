import style from "./App.module.css";
import Introduction from "./sections/Introduction/Introduction";
import Summary from "./sections/Summary/Summary";
import WorkExperience from "./sections/WorkExperience/WorkExperience";

function App() {
  return (
    <div className={style.container}>
      <Introduction />
      <div className={style.sectionsContainer}>
        <Summary />
        <WorkExperience />
      </div>
    </div>
  );
}

export default App;
