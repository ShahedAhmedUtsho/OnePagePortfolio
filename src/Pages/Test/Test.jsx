

import React, { useState, useEffect } from 'react';
import BannarGrid from '../Home/Bannar/BannarGrid';
import OnHeader from '../../Components/OnHeader/OnHeader';
import Social from '../Home/Social/Social';
import ProjectsSection from '../Home/Projects/ProjectsSection';
import Skills from '../Home/Skills/Skills';
import Footer from '../../Components/Footer/Footer';
import ContactMe from '../Home/Contact/ContactMe';
import { useLocation } from 'react-router-dom';
import AboutPage from '../Home/About/About';



const HomePage = () => {
  const location = useLocation()
  
  const [activeSection, setActiveSection] = useState("");
  const sections = ['home', 'projects',"skills","about", 'contact'];

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
{
  location.pathname !== "/login" && "/register"  &&  <OnHeader activeSection={activeSection} />
}

    

      <section id="home" className=" -mb-20 min-h-fit ">
        <div className=' lg:mx-auto'>
          <BannarGrid/>
          <Social/>
        </div>
      </section>
      
      <section id="projects" className="pt-20 -mb-14 min-h-screen ">
      <div className="text-lg md:text-2xl mt-5 font-medium leading-tight md:leading-snug tracking-tight md:tracking-normal    font-input-sans  dark:text-slate-200 text-slate-800"> Projects</div>
       <ProjectsSection/>
      </section>
      <section id="skills" className=" pt-20 min-h-fit ">
      <div className="text-lg md:text-2xl mt-5 font-medium leading-tight md:leading-snug tracking-tight md:tracking-normal   font-input-sans mb-2 dark:text-slate-200 text-slate-800"> Skills</div>
       <Skills/>
      </section>
      <section id="about" className="pt-20  ">
       <AboutPage/>
      </section>
      <section id="contact" className="py-20 min-h-fit  ">
     <ContactMe/>
      </section>
      
    </div>
  );
};

export default HomePage;
