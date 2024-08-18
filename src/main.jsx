// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import { RouterProvider } from "react-router-dom";
// import { router } from "./routes/Routes";


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//    <RouterProvider router={router} />
//   </StrictMode>,
// )

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider,createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Service from "./pages/service/Service";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,

      },
      {
        path: "/about",
        element: <About/>,
      },

      {
        path: "/service",
        element: <Service/>,
      },

      {
        path: "/portfolio",
        element: <Portfolio/>,
      },

      {
        path: "/contact",
        element: <Contact/>,
      },
    
    ]
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
