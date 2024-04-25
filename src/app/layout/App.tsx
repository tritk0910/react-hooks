import { useState } from "react";
import Context from "../components/Context";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col w-screen h-screen justify-center items-center gap-5">
        <Context />
        <div>{count}</div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Click here to increase number
        </button>
      </div>
    </>
  );
}
