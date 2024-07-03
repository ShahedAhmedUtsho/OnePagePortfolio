// src/components/HomePage.js

import React, { useState, useEffect } from 'react';
import BannarGrid from '../Home/Bannar/BannarGrid';
import OnHeader from '../../Components/OnHeader/OnHeader';
import Social from '../Home/Social/Social';
import ProjectsSection from '../Home/Projects/ProjectsSection';

const HomePage = () => {
  const [activeSection, setActiveSection] = useState('about');
  const sections = ['home', 'projects',"skills", 'contact', 'about'];

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

      <section id="home" className=" -mb-20 min-h-fit ">
        <div className=' lg:mx-auto'>
          <BannarGrid/>
          <Social/>
        </div>
      </section>
      
      <section id="projects" className="pt-20 min-h-screen ">
      <div className="text-lg md:text-2xl mt-5 font-medium leading-tight md:leading-snug tracking-tight md:tracking-normal   font-input-sans mb-2 dark:text-slate-200 text-slate-800"> Projects</div>
       <ProjectsSection/>
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
