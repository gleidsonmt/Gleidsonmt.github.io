import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root13 from "./pages/challenges/Root13.jsx";
import Romanos from "./pages/challenges/Romanos.jsx";
import Home from "./pages/Home.jsx";
import Blog from "./pages/blog/Blog.jsx";
import BlogDetails from "./pages/blog/BlogDetails.jsx";

import ReactMarkdown from "react-markdown";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/romanos",
        element: <Romanos />,
      },
      {
        path: "/root13",
        element: <Root13 />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/post/:id",
        element: <BlogDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
