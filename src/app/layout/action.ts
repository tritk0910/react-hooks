export interface JobState {
    job: string;
    jobs: string[];
  }
  
  export type Action =
    | { type: "SET_JOB"; payload: string }
    | { type: "ADD_JOB"; payload: string }
    | { type: "DELETE_JOB"; payload: number };
  
  export const initialState: JobState = {
    job: "",
    jobs: [],
  };