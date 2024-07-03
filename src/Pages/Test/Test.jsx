// src/components/HomePage.js

import React, { useState, useEffect } from 'react';
import BannarGrid from '../Home/Bannar/BannarGrid';
import OnHeader from '../../Components/OnHeader/OnHeader';
import Social from '../Home/Social/Social';

const HomePage = () => {
  const [activeSection, setActiveSection] = useState('about');
  const sections = ['banner', 'projects',"skills", 'contact', 'about'];

  const handleScroll = () => {
    const scrollPosition = window.scrollY + 200;

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
        setActiveSection(section);
        window.history.replaceState(null, null, `#${section}`);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="font-sans">
      <OnHeader activeSection={activeSection} />

      <section id="banner" className=" min-h-screen ">
        <div className=' lg:mx-auto'>
          <BannarGrid/>
          <Social/>
        </div>
      </section>
      
      <section id="projects" className="pt-20 min-h-screen ">
        <h1 className="text-4xl">Projects</h1>
        <p className="mt-4">Our projects section.</p>
      </section>
      <section id="skills" className="pt-20 min-h-screen ">
        <h1 className="text-4xl">skills</h1>
        <p className="mt-4">skills section.</p>
      </section>
      <section id="about" className="pt-20 min-h-screen ">
        <h1 className="text-4xl">About</h1>
        <p className="mt-4">About us section.</p>
      </section>
      <section id="contact" className="pt-20 min-h-screen ">
        <h1 className="text-4xl">Contact</h1>
        <p className="mt-4">Contact us section.</p>
      </section>
    </div>
  );
};

export default HomePage;
