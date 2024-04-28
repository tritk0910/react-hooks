import { Outlet, Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { Dropdown, MenuProps } from "antd";
import { useState } from "react";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { ThemeContext } from "../../context/themeContext";

export default function App() {
  const localStorageTheme = localStorage.getItem("darkMode");
  const [darkMode, setDarkMode] = useState<boolean>(JSON.parse(localStorageTheme || "false") || false);

  const toggleDarkMode = () => {
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
    setDarkMode(!darkMode);
  };

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
    <ThemeContext.Provider value={darkMode}>
      <div className={`relative ${darkMode && "dark"}`}>
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
        <div className="opacity-0 dark:opacity-100 transition-opacity duration-500 bg-home-background bg-[length:100%_100%] z-[-1] absolute top-0 left-0 h-screen w-screen" />
        <button
          className="absolute w-14 h-14 right-10 bottom-10 flex justify-center items-center dark:bg-gradient-to-tr dark:from-violet-600 dark:to-indigo-600 bg-gradient-to-tr from-teal-400 via-cyan-400 to-sky-400 rounded-full text-xl"
          onClick={toggleDarkMode}
        >
          {darkMode ? <MoonOutlined /> : <SunOutlined />}
        </button>
      </div>
    </ThemeContext.Provider>
  );
}
