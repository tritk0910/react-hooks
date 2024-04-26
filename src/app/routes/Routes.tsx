import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../layout/content/App";
import ToDoList from "../components/ToDoList";
import HomePage from "../layout/content/HomePage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "todolist", element: <ToDoList /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
