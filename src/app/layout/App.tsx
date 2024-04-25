import { useState } from "react";

import ToDoList from "../components/ToDoList";
import { Theme, ThemeContext } from "../context/themeContext";

export default function App() {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ToDoList />
    </ThemeContext.Provider>
  );
}
