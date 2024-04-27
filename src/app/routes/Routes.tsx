import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../layout/content/App";
import ToDoList from "../components/ToDoList";
import HomePage from "../layout/home/HomePage";
import Video from "../layout/video/Video";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "todolist", element: <ToDoList /> },
      { path: "video", element: <Video /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
