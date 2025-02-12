import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // Correct import
import HeroPage from './components/HeroPage';
import Services from './components/Services';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ProjectDetails from './components/ProjectDetails';
import './index.css';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <section id="hero">
                    <HeroPage />
                  </section>
                  <section id="services">
                    <Services />
                  </section>
                  <section id="projects">
                    <Projects />
                  </section>

                  <section id="contactus">
                    <ContactUs />
                  </section>
                </>
              } 
            />
            <Route path="/projectdetails/:id" element={<ProjectDetails />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;