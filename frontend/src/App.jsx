import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ScrollIndicator from './components/ScrollIndicator';

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <section id="hero"><Hero /></section>
      <ScrollIndicator />

      <div id="fadein-target">
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="experience"><Experience /></section>
        <section id="contact"><Contact /></section>
      </div>
    </div>
  );
}

export default App;
