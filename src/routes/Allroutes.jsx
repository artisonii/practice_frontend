import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../pages/HomePages/Home";
import Theme from "../pages/themePage/Theme";
import Template from "../pages/templatePage/Template";

const Allroutes = () => {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/theme" element={<Theme />} />
      <Route path="/template" element={<Template />} />
    </Routes>

  );
};

export default Allroutes;
