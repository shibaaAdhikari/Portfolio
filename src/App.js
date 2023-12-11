// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Navbar/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Experience from './Pages/Experience';
import Projects from "./Pages/Project";
import Contact from './Pages/Contact';

// import Experience from './Experience';
// import Contact from './Contact';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/experience"
          element={
            <Layout>
              <Experience />
            </Layout>
          }
        />
        <Route
          path="/projects"
          element={
            <Layout>
              <Projects />
            </Layout>
          }
        />
           <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />

      </Routes>
    </Router>
  );
};

export default App;
