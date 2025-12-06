import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Post from "./Post";
import AllPosts from "./AllPosts";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<AllPosts />} />
        <Route path="/posts/:slug" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}
