/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Works from './components/Works';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Chatbot from './components/Chatbot';
import WorksPage from './pages/WorksPage';

function Reveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Homepage() {
  return (
    <div className="relative font-body overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        
        <Reveal>
          <About />
        </Reveal>
        
        <Reveal>
          <Services />
        </Reveal>
        
        <Reveal>
          <Works />
        </Reveal>
        
        <Reveal>
          <Testimonials />
        </Reveal>
        
        <Reveal>
          <Contact />
        </Reveal>
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
}

export default function App() {
  return (
    <>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/works" element={<WorksPage />} />
      </Routes>
    </>
  );
}
