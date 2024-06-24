import style from "./App.module.css";
import Introduction from "./sections/Introduction/Introduction";
import Summary from "./sections/Summary/Summary";
import WorkExperience from "./sections/WorkExperience/WorkExperience";
import { useMediaQuery } from "react-responsive";

function App() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <div className={style.container}>
      <Introduction />
      <div
        className={
          isTabletOrMobile
            ? style.sectionsContainerCollapsed
            : style.sectionsContainer
        }
      >
        <Summary isSmallScreen={isTabletOrMobile} />
        <WorkExperience isSmallScreen={isTabletOrMobile} />
      </div>
    </div>
  );
}

export default App;
