import "./App.css";
import React from "react";
import Home from "./pages/Home";
// import Video from "./components/VideoContainer/video";
// import Navbar from "./components/Header/navBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>  
    </BrowserRouter>


  )
}

export default App;
