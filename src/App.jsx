import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';


const App = () => (
  <>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </main>
    <Footer />
  </>
);

export default App;
