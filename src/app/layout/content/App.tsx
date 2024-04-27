import { useEffect, useState } from "react";
import { Theme, ThemeContext } from "../../context/themeContext";
import { Outlet, Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { Dropdown, MenuProps } from "antd";
// import { items } from "../../context/menuProps";

export default function App() {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem("theme") as Theme) || "light"
  );

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const background = document.getElementsByTagName("BODY")[0] as HTMLElement;
    background.style.backgroundImage =
      theme === "light" ? "none" : "url('../public/img/background.png')";
  }, [theme]);

  const items: MenuProps["items"] = [
    {
      label: <Link to={"/"}>Home</Link>,
      key: "/",
    },
    {
      label: <Link to={"/todolist"}>To do list (useReducer)</Link>,
      key: "/todolist",
    },
    {
      label: (
        <Link to={"/video"}>
          Play Video (useRef, forwardRef, useImperativeHandle)
        </Link>
      ),
      key: "2",
    },
    {
      label: "3rd menu item",
      key: "3",
    },
  ];

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <NavBar />
      <Dropdown menu={{ items }} trigger={["contextMenu"]}>
        <div
          className="h-[400]"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <Outlet />
        </div>
      </Dropdown>
    </ThemeContext.Provider>
  );
}
