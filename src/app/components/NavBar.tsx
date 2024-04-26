import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

export default function NavBar() {
  const themeContext = useContext(ThemeContext);

  return (
    <div className="fixed h-20 bg-green-500 w-screen flex justify-end items-center p-5">
        <button
          onClick={themeContext!.toggleTheme}
          className={`${
            themeContext!.theme === "light" ? "bg-blue-500" : "bg-black"
          } text-white px-3 py-1 rounded-md`}
        >
          Theme
        </button>
    </div>
  );
}
