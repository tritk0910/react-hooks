import { useContext, useLayoutEffect, useState } from "react";
import { ThemeContext } from "../context/themeContext";
import { Tooltip } from "antd";

export default function Count() {
  const [count, setCount] = useState(0);
  const themeContext = useContext(ThemeContext);

  useLayoutEffect(() => {
    if (count === 5) {
      setCount(0);
    }
  }, [count]);

  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen">
      <h1
        className={`text-8xl font-akira ${
          themeContext?.theme === "light"
            ? "bg-gradient-to-tr from-teal-400 via-cyan-400 to-sky-400"
            : "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        }  bg-clip-text text-transparent color-transition`}
      >
        Count: {count}
      </h1>
      <Tooltip title="The count number will reset when reaches to 5" color={themeContext?.theme === "light" ? "cyan" : "pink"} placement="bottom">
        <button
          className={`${
            themeContext!.theme === "light"
              ? "bg-gradient-to-br from-cyan-400 to-sky-400"
              : "bg-gradient-to-br from-purple-500 to-pink-500"
          } text-white px-3 py-1 rounded-md font-main font-bold`}
          onClick={() => setCount(count + 1)}
        >
          Click to count
        </button>
      </Tooltip>
    </div>
  );
}
