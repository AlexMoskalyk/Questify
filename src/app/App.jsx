import styles from "./App.module.scss";
import QuestView from "../views/QuestView";

function App() {
  return (
    <div className={styles.app__container}>
      <QuestView />
    </div>
  );
}

export default App;
