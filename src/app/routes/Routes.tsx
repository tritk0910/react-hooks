import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../layout/content/App";
import ToDoList from "../components/ToDoList";
import HomePage from "../layout/home/HomePage";
import Video from "../layout/video/Video";
import Count from "../components/Count";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "todolist", element: <ToDoList /> },
      { path: "video", element: <Video /> },
      { path: "count", element: <Count /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
