import React from 'react'
import { Routes, Route, useParams } from "react-router-dom";
import Home from './Landing/home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}
