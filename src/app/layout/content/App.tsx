import { useState } from "react";
import { Theme, ThemeContext } from "../../context/themeContext";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";

export default function App() {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <NavBar />
      <Outlet />
    </ThemeContext.Provider>
  );
}
