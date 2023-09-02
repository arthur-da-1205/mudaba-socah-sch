import React from 'react';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Videos from './pages/Videos';
import Contact from './pages/Contact';
import BlogDetail from './pages/BlogDetail';
import Gallery from './pages/Gallery';
import Berita from './pages/Berita';
import Profile from './pages/Profile';
import PPDB from './pages/PPDB';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/ppdb" element={<PPDB />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogdetail" element={<BlogDetail />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>
    </>
  );
}

export default App;
