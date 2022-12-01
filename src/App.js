import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Language from "./components/Language/Language";
import Portfolio from "./components/Portfolio";
import Csify from "./components/Csify";
import Blog from "./components/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/portfolio",
        element: <Portfolio></Portfolio>,
      },
      {
        path: "/csify",
        element: <Csify></Csify>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/language",
        element: <Language></Language>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
