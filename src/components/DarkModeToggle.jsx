import styles from "./DarkModeToggle.module.css";

const DarkModeToggle = ({ onToggle, darkMode }) => {
  //4. child component receives the props and displays either text based on the state
  // it also calls onToggle when clicked
  return (
    <button onClick={onToggle} className={`$styles.button} ${darkMode ? styles.dark : styles.light}`}>
      Toggle {darkMode ? "Light" : "Dark"}
    </button>
  );
};

export default DarkModeToggle;
