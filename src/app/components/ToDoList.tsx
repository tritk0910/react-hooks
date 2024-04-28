import { reducer } from "../context/reducer";
import { initialState } from "../context/action";
import logger from "../context/logger";
import { useReducer, useRef } from "react";

export default function ToDoList() {
  const [state, dispatch] = useReducer(logger(reducer), initialState);
  const inputRef = useRef<HTMLInputElement>(null);

  const setJob = () => {
    dispatch({ type: "SET_JOB", payload: "" });
    dispatch({ type: "ADD_JOB", payload: state.job });
    inputRef.current?.focus();
  };

  return (
    <>
      <div className="flex flex-col w-screen h-screen justify-center items-center gap-5">
        <h1 className="text-8xl font-akira bg-gradient-to-tr from-teal-400 via-cyan-400 to-sky-400 dark:bg-gradient-to-r dark:from-blue-500 dark:via-purple-500 dark:to-pink-500 bg-clip-text text-transparent color-transition tracking-wider">
          To do list
        </h1>
        <input
          className="border border-blue-500 px-3 py-1 rounded-md w-80"
          placeholder="Enter todo..."
          value={state.job}
          ref={inputRef}
          onChange={(e) => {
            dispatch({ type: "SET_JOB", payload: e.target.value });
          }}
        />
        <button
          className="bg-gradient-to-br from-cyan-400 to-sky-400 dark:bg-gradient-to-br dark:from-purple-500 dark:to-pink-500 text-white px-3 py-1 rounded-md font-main font-bold"
          onClick={setJob}
        >
          Add
        </button>
        <ul>
          {state.jobs.map((job: string, index: number) => (
            <li
              key={index}
              className="color-transition text-black dark:text-white text-xl"
            >
              {job}{" "}
              <button
                className="text-red-500"
                onClick={() => {
                  dispatch({ type: "DELETE_JOB", payload: index });
                }}
              >
                &times;
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
