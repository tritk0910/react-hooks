import { useEffect, useState } from "react";
import { Theme, ThemeContext } from "../../context/themeContext";
import { Outlet, Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { Dropdown, MenuProps } from "antd";

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
    const body = document.getElementsByTagName("BODY")[0] as HTMLElement;
    body.style.backgroundColor = theme === "light" ? "#fff" : "#000";
    body.style.transition =
      "background-color 0.5s ease-in-out, background-image 0.5s ease-in-out";
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
      label: <Link to={"/count"}>Click to count (useLayoutEffect)</Link>,
      key: "3",
    },
  ];

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="relative">
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
        <div
          className={`${
            theme === "light" ? "opacity-0" : "opacity-100"
          } transition-opacity duration-500 bg-home-background bg-[length:100%_100%] z-[-1] absolute top-0 left-0 h-screen w-screen`}
        />
      </div>
    </ThemeContext.Provider>
  );
}
