import React from 'react';
import { Github, Linkedin, Mail, MoveUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="  globalBG bg-indigo-100  dark:bg-slate-900 p-[0.5px] ">
      <div className="flex flex-col  md:flex-row md:justify-between px-2 md:px-5 lg:px-10 items-center">
        <div className="text-center md:text-left">
          <h6 className="text-lg font-bold text-slate-900 dark:text-slate-200">Shahed Ahmed</h6>
          <p className="text-sm text-slate-600 dark:text-slate-400">Frontend Developer & MERN Stack Enthusiast</p>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center transition-all duration-75 commonBox p-1 rounded-full">
            <Github size={20} className="dark:text-slate-200 text-slate-800" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center transition-all duration-75 commonBox p-1 rounded-full">
            <Linkedin size={20} className="dark:text-slate-200 text-slate-800" />
          </a>
          <a href="mailto:shahed@example.com" className="flex justify-center items-center transition-all duration-75  commonBox p-1 rounded-full">
            <Mail size={20} className="dark:text-slate-200 text-slate-800" />
          </a>
        </div>
      </div>

      <div className="text-center mt-4 text-slate-800 dark:text-slate-400 pb-5 text-sm">
        &copy; {new Date().getFullYear()} Shahed Ahmed. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
