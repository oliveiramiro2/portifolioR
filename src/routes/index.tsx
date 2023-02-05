import React from "react";
import { Routes, Route } from "react-router";

import ContactUs from "../pages/ContactUs";
import Intro from "../pages/Intro";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";

const PortfolioRoutes: React.FC = () => (
    <Routes>
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/" element={<Intro />} />
    </Routes>
);

export default PortfolioRoutes;
