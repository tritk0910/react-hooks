import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import { FloatButton } from "antd";
import { MoonOutlined, SunOutlined } from "@ant-design/icons/lib/icons";

export default function NavBar() {
  const themeContext = useContext(ThemeContext);

  return (
    <div
      className={`fixed h-20 bg-gradient-to-r ${
        themeContext?.theme === "light"
          ? "from-teal-400 via-cyan-400 to-sky-400"
          : "from-blue-500 via-purple-500 to-pink-500"
      }  w-screen flex justify-center items-center p-5`}
    >
      <span className="font-main font-bold text-white text-2xl">
        Right click to navigate
      </span>
      <FloatButton
        icon={
          themeContext!.theme === "light" ? <SunOutlined /> : <MoonOutlined />
        }
        onClick={themeContext!.toggleTheme}
        type={themeContext!.theme === "light" ? `default` : `primary`}
      />
    </div>
  );
}
