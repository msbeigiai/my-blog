import { Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home";
import AboutMe from "@/components/AboutMe";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about-me" element={<AboutMe />} />
  </Routes>
);

export default AppRoutes;
