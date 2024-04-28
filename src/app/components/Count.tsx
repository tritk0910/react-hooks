import { useContext, useLayoutEffect, useState } from "react";
import { Tooltip } from "antd";
import { ThemeContext } from "../context/themeContext";

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
      <h1 className="text-8xl font-akira bg-gradient-to-tr from-teal-400 via-cyan-400 to-sky-400 dark:bg-gradient-to-r dark:from-blue-500 dark:via-purple-500 dark:to-pink-500 bg-clip-text text-transparent color-transition tracking-wider">
        Count: {count}
      </h1>
      <Tooltip
        title="The count number will reset when reaches to 5"
        placement="bottom"
        color={themeContext ? "magenta" : "cyan"}
      >
        <button
          className="
            bg-gradient-to-br from-cyan-400 to-sky-400 dark:bg-gradient-to-br dark:from-purple-500 dark:to-pink-500 text-white px-3 py-1 rounded-md font-main font-bold"
          onClick={() => setCount(count + 1)}
        >
          Click to count
        </button>
      </Tooltip>
    </div>
  );
}
