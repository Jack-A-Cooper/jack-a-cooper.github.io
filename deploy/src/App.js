import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Drawer from './components/Header/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Demos from './components/Demos';
import Projects from './components/Projects';
import Music from './components/Music';
import Blog from './components/Blog';
import Contact from './components/Contact';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Drawer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Demos" element={<Demos />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Music" element={<Music />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
