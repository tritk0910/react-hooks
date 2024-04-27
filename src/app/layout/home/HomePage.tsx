import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";

export default function HomePage() {
  const theme = useContext(ThemeContext);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <span
        className={`text-8xl font-akira ${
          theme?.theme === "light"
            ? "bg-gradient-to-tr from-teal-400 via-cyan-400 to-sky-400"
            : "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        }  bg-clip-text text-transparent`}
      >
        Homepage
      </span>
    </div>
  );
}
