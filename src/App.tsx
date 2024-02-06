import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbarr from "./Navbarr";
import Home from "./Home";
import Model from "./Model";
import Spinner from "./Spinner";
import Result from "./Result";
import AboutModel from "./AboutModel";

export function getProxyy() {
  return process.env.REACT_APP_APIURL
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/test",
      element: <Model />,
    },
    {
      path: "/spinner",
      element: <Spinner />,
    },
    {
      path: "/result/:id",
      element: <Result />,
    },
    {
      path: "/model",
      element: <AboutModel />,
    },
  ]);
  return (
    <>
      <Navbarr />
      <main>
        <RouterProvider router={router}></RouterProvider>
      </main>
      {/* footer */}
    </>
  );
}

export default App;
