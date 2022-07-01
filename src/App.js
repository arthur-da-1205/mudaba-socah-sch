import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Gadgets from "./pages/Gadgets";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/gadgets" element={<Gadgets />} />
      </Routes>
    </div>
  );
}

export default App;
