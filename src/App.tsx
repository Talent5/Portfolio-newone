import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from 'react-three-fiber';
import { Database, Code, BarChart } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThreeDBackground from './components/ThreeDBackground';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      <Canvas className="fixed inset-0 z-0">
        <ThreeDBackground />
      </Canvas>
      <div className="relative z-10">
        <Header />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </motion.div>
      </div>
    </div>
  );
}

export default App;