import './App.css';
import Header from "./pages/header/header";
import Description from "./pages/description/description";
import Box from "@mui/material/Box";
import Graph from "./pages/graph/graph";
import HistogramGraph from "./components/histogramGraph/histogramGraph";
import React from "react";
import Content from "./pages/content/content";
import {Route, RouterProvider, Routes} from "react-router";
import {BrowserRouter, createBrowserRouter} from "react-router-dom";
import Forex from "./pages/ forex/ forex";


function App() {
    // const router = createBrowserRouter([
    //     {
    //         path: '/',
    //         element: <Content />,
    //
    //
    //     },
    //     {
    //         path: '/forex',
    //         element: <Forex/>,
    //
    //     }
    // ])
  return (
      <BrowserRouter>
          <Header/>
          <Routes>
              <Route element={<Content />} path="/"></Route>
              <Route element={<Forex />} path="/forex"></Route>
          </Routes>

      </BrowserRouter>
      // <RouterProvider router={router}>
      //     <Header/>
      // </RouterProvider>
  );
}

export default App;
