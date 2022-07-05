import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Gadgets from "./pages/Gadgets";
import Videos from "./pages/Videos";
import Contact from "./pages/Contact";
import BlogDetail from "./pages/BlogDetail";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/gadgets" element={<Gadgets />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogdetail" element={<BlogDetail />} />
      </Routes>
    </div>
  );
}

export default App;
