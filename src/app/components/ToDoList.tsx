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
      <button
        onClick={themeContext!.toggleTheme}
        className={`${
          themeContext!.theme === "light" ? "bg-blue-500" : "bg-black"
        } text-white px-3 py-1 rounded-md fixed right-5 top-5`}
      >
        Theme
      </button>
      <div className="flex flex-col w-screen h-screen justify-center items-center gap-5">
        <h1
          className={`${
            themeContext!.theme === "light" ? "text-blue-500" : "text-black"
          } font-bold text-7xl`}
        >
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
          className="bg-blue-500 text-white px-3 py-1 rounded-md"
          onClick={setJob}
        >
          Add
        </button>
        <ul>
          {state.jobs.map((job: string, index: number) => (
            <li key={index}>
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
