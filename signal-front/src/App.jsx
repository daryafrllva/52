import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';

function App() {

  return (
    <>
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App