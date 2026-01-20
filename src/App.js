import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
    document.body.style.backgroundColor =
      mode === 'light' ? '#121212' : 'white';
  };

  return (
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode} />

      <div className="container my-4">
        <Routes>
          <Route path="/" element={<TextForm mode={mode} heading="Enter the text to analyze" />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
