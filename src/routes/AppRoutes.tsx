import AboutMe from "@/components/AboutMe";
import { Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home";
import AllPosts from "@/components/AllPosts";
import PostDetail from "@/components/PostDetail";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about-me" element={<AboutMe />} />
    <Route path="/posts" element={<AllPosts />} />
    <Route path="/posts/:postId" element={<PostDetail />} />
  </Routes>
);

export default AppRoutes;
