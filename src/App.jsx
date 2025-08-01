import React from 'react';
import Hero from './components/Hero';
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from './components/Footer';



function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
      <Hero />
      <About/>
      <Navbar />
      <Projects />
      <Skills />
      <Contact />
      <Footer />


    </div>
  );
}

export default App;
