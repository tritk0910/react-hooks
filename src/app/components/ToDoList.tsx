import { reducer } from "../context/reducer";
import { initialState } from "../context/action";
import logger from "../context/logger";
import { useContext, useReducer, useRef } from "react";
import { ThemeContext } from "../context/themeContext";

export default function ToDoList() {
  const [state, dispatch] = useReducer(logger(reducer), initialState);
  const inputRef = useRef<HTMLInputElement>(null);

  const setJob = () => {
    dispatch({ type: "SET_JOB", payload: "" });
    dispatch({ type: "ADD_JOB", payload: state.job });
    inputRef.current?.focus();
  };

  const themeContext = useContext(ThemeContext);

  return (
    <>
      <div className="flex flex-col w-screen h-screen justify-center items-center gap-5">
        <h1
          className={`text-8xl font-akira ${
            themeContext?.theme === "light"
              ? "bg-gradient-to-tr from-teal-400 via-cyan-400 to-sky-400"
              : "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          }  bg-clip-text text-transparent color-transition`}
        >
          To do list
        </h1>
        <input
          className={`border ${
            themeContext!.theme === "light" ? "border-blue-500" : ""
          } px-3 py-1 rounded-md w-80`}
          placeholder="Enter todo..."
          value={state.job}
          ref={inputRef}
          onChange={(e) => {
            dispatch({ type: "SET_JOB", payload: e.target.value });
          }}
        />
        <button
          className={`${
            themeContext!.theme === "light"
              ? "bg-gradient-to-br from-cyan-400 to-sky-400"
              : "bg-gradient-to-br from-purple-500 to-pink-500"
          } text-white px-3 py-1 rounded-md font-main font-bold`}
          onClick={setJob}
        >
          Add
        </button>
        <ul>
          {state.jobs.map((job: string, index: number) => (
            <li
              key={index}
              className={`color-transition ${
                themeContext?.theme === "light" ? "text-black" : "text-white"
              }
              text-xl`}
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
