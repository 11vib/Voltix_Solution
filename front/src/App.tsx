import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TestimonialsPage from './pages/TestimonialsPage';
import ProjectsPage from './pages/ProjectsPage';
import ServicesPage from './pages/ServicesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path='/services' element={<ServicesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>