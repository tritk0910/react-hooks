import * as action from "./action";

export default function logger(
  reducer: (state: action.JobState, action: action.Action) => action.JobState
) {
  return (prevState: action.JobState, action: action.Action) => {
    console.group(action.type);
    console.log("Prev state: ", prevState);
    console.log("Action: ", action);

    const newState = reducer(prevState, action);
    console.log("New state: ", newState);

    console.groupEnd();
    return newState;
  };
}
