// src/components/OnHeader/OnHeader.js

import { AlignJustify, Moon, Sun, X } from 'lucide-react';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Privider/Provider';
import { Link } from 'react-router-dom';

const OnHeader = ({ activeSection }) => {
  const { dark, setDark, handleMood } = useContext(AuthContext);
 
  const [isOpen, setIsOpen] = useState(false);

  const toggleBar = () => {
    setIsOpen(!isOpen);
  };


  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

 

  return (
    <>
      <div className={`w-full globalBG fixed left-0 transition-transform z-[999] duration-300 ${ "top-0" } right-0 m-auto border-b dark:border-[#64748b89] border-slate-500 bg-indigo-100 dark:bg-slate-900 leading-6 min-h-14 px-2 md:min-h-[72px] md:px-10 flex font-input-sans items-center`}>
        <div className='flex gap-3 items-center w-full h-full'>
          <div className='logo flex items-center'>
            <Link to="/" className='font-input-sans text-lg md:text-3xl dark:text-slate-400'>
              Shahed
            </Link>
          </div>
          <div className='flex lg:justify-between justify-end items-center w-full'>
            <ul className='hidden lg:block'>
              {["projects", "skills","about", "contact"].map((a, index) => (
                <li key={index} className='inline-block'>
                  <a href={`#${a}`} className={`text-sm text-left align-bottom px-5 py-2 dark:text-slate-400 text-slate-700 dark:hover:text-slate-200 hover:text-slate-900 hover:font-black capitalize leading-5 ${activeSection === a && 'dark:!text-slate-200 !text-slate-900'  }`}>
                    {`${a}`}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex gap-3">
              <button onClick={handleMood} className='px-2 text-base dark:text-indigo-300'>
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button className='ghostBtn btn self-end hidden lg:inline-block dark:text-slate-400 text-slate-700 hover:bg-indigo-400 hover:bg-opacity-30 dark:hover:text-slate-200 hover:text-slate-900 font-input-sans text-sm'>
                Log in
              </button>
              <button className='ghostBtn btn self-end hidden lg:inline-block dark:text-indigo-300 text-indigo-800 hover:bg-opacity-10 hover:bg-indigo-400 dark:hover:text-slate-200 hover:text-slate-900 font-input-sans text-sm'>
                Join
              </button>
              <button onClick={toggleBar} className='lg:hidden text-indigo-800 dark:text-indigo-300 '>
                {isOpen ? <X size={24} className='dark:text-white text-black' /> : <AlignJustify size={24} className='dark:text-white text-black' />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className='w-full flex flex-col z-[888] lg:hidden fixed bg-indigo-100 dark:bg-slate-900 globalBG pt-20 h-screen'>
          {[ "projects", "skills","about", "contact"].map((a, index) => (
            <a onClick={toggleBar} className='text-sm text-left align-bottom px-5 py-2 dark:text-slate-400 text-slate-700 dark:hover:text-slate-200 hover:text-slate-900 hover:font-black leading-5' key={index} href={`#${a}`}>
              <span className='font-input-sans capitalize'>{a}</span>
            </a>
          ))}
          <button className='ghostBtn btn mx-5 my-2 dark:text-slate-400 text-slate-700 hover:bg-indigo-400 hover:bg-opacity-30 dark:hover:text-slate-200 hover:text-slate-900 hover:font-black font-input-sans text-sm'>
            Log in
          </button>
          <button className='ghostBtn btn mx-5 my-2 dark:text-indigo-300 text-indigo-800 hover:bg-opacity-10 hover:bg-indigo-400 dark:hover:text-slate-200 hover:text-slate-900 hover:font-black font-input-sans text-sm'>
            Join
          </button>
        </div>
      )}
    </>
  );
};

export default OnHeader;
