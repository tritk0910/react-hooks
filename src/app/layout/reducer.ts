import * as action from "./action";

export const reducer = (state: action.JobState, action: action.Action): action.JobState => {
  let newState;
  const newJobs = [...state.jobs];
  const { type, payload } = action;

  switch (type) {
    case "SET_JOB":
      newState = { ...state, job: payload };
      break;
    case "ADD_JOB":
      newState = { ...state, jobs: [...state.jobs, payload] };
      break;
    case "DELETE_JOB":
      newJobs.splice(payload, 1);
      newState = { ...state, jobs: newJobs };
      break;
    default:
      throw new Error("Invalid action");
  }
  return newState;
};