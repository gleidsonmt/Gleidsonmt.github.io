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

// const routes = createHashRouter([
//   {
//     path: "/*",
//     element: <App />,
//     children: [
//       {
//         path: "/home",
//         element: <Home />,
//         children: [
//           {
//             path: "/*/footer",
//             element: <Footer />,
//           },
//         ],
//       },
//       {
//         path: "blog",
//         element: <Blog />,
//         children: [
//           {
//             path: "blog#footer",
//             element: <Footer />,
//           },
//         ],
//       },
//       {
//         path: "blog/post/:id",
//         element: <Post />,
//       },
//     ],
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
      },
      {
        path: "/*/blog",
        element: <Blog />,
      },
      {
        path: "/*/blog/post/:id",
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

import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
  },
});

export const { incremented, decremented } = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
