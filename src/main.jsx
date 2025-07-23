import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createHashRouter, RouterProvider } from "react-router-dom";
import Blog from "./pages/blog/Blog.jsx";
import Post from "./pages/blog/Post.jsx";
import { CarouselPage } from "./pages/carousel/CarouselPage.jsx";
import BinaryConverter from "./pages/challenges/BinaryConverter.jsx";
import Highscores from "./pages/challenges/Highscores.jsx";
import Game from "./pages/challenges/quiz/Game.jsx";
import Quiz from "./pages/challenges/quiz/Quiz.jsx";
import Romanos from "./pages/challenges/Romanos.jsx";
import Root13 from "./pages/challenges/Root13.jsx";
import Extras from "./pages/Extras.jsx";
import Home from "./pages/Home.jsx";

const routes = createHashRouter([
  {
    path: "/*",
    element: <App />,
    children: [
      {
        path: "/*",
        element: <Home />,
      },
      {
        path: "/*/blog",
        element: <Blog />,
      },
      {
        path: "/*/blog/post/:id",
        element: <Post />,
      },
      {
        path: "/*/carousel",
        element: <CarouselPage />,
      },
      // Challenges
      {
        path: "/*/romanos",
        element: <Romanos />,
      },
      {
        path: "/*/root13",
        element: <Root13 />,
      },
      {
        path: "/*/binary",
        element: <BinaryConverter />,
      },
      {
        path: "/*/quiz",
        element: <Quiz />,
        children: [],
      },
      {
        path: "/*/quiz/highscores",
        element: <Highscores />,
      },
      {
        path: "/*/quiz/game",
        element: <Game />,
      },
      {
        path: "/*/extras",
        element: <Extras />,
      },
    ],
  },
]);

function hashLinkScroll() {
  const { hash } = window.location;
  if (hash !== "") {
    // Push onto callback queue so it runs after the DOM is updated,
    // this is required when navigating from a different page so that
    // the element is rendered on the page before trying to getElementById.
    setTimeout(() => {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) element.scrollIntoView();
    }, 0);
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
