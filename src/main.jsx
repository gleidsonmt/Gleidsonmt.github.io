import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Root13 from "./pages/challenges/Root13.jsx";
import Romanos from "./pages/challenges/Romanos.jsx";
import Home from "./pages/Home.jsx";
import Blog from "./pages/blog/Blog.jsx";
import Post from "./pages/blog/Post.jsx";

import CodeBlock from "./pages/codeblocks/CodeBlock.jsx";

import Test from "./pages/blog/Test.jsx";
import Footer from "./pages/Footer.jsx";

// const routes = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/blog",
//         element: <Blog />,
//       },
//       {
//         path: "/blog/post/:id",
//         element: <Post />,
//         // path: "/blog/test/",
//         // element: <Test />,
//       },
//       {
//         path: "/romanos",
//         element: <Romanos />,
//       },
//     ],
//   },

//   {
//     path: "/root13",
//     element: <Root13 />,
//   },

//   {
//     path: "block",
//     element: <CodeBlock />,
//   },
// ]);

const routes = createHashRouter([
  {
    path: "/*",
    element: <App />,
    children: [
      {
        path: "/*",
        element: <Home />,
        children: [
          {
            path: "/*/footer",
            element: <Footer />,
          },
        ],
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "blog/post/:id",
        element: <Post />,
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
