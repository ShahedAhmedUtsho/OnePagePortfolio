import { AlignJustify, Moon, Sun, X } from 'lucide-react';
import { useContext, useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AuthContext } from '../../Privider/Provider';

const Header = () => {
    const {dark, setDark,handleMood} = useContext(AuthContext)
    const [lastScrollPosition, setLastScrollPosition] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [toggle, setToggle] = useState(false);









    const toggleBar = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = () => {
        const currentPosition = window.pageYOffset;
        const scrollUp = lastScrollPosition > currentPosition;
        setVisible(scrollUp || currentPosition < 10);
        setLastScrollPosition(currentPosition);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollPosition]);

   

    return (
        <>
            <div className={`w-full globalBG fixed left-0 transition-transform z-[999] duration-300 ${visible ? "top-0" : "-top-20"} right-0 m-auto border-b border-slate-500 bg-indigo-100 dark:bg-slate-900 leading-6 min-h-[72px] md:px-10 flex font-input-sans items-center`}>
                <div className='flex gap-3 items-center w-full h-full'>
                    <div className='logo flex items-center'>
                        <Link to="/" className='font-input-sans text-3xl dark:text-slate-400'>
                            Shahed
                        </Link>
                    </div>
                    <div className='flex lg:justify-between justify-end items-center w-full'>



                        <ul className=' hidden lg:block '>
                            {["project", "templates", "components", "blog"].map((a, index) => (
                               <li key={index} className=' inline-block'>
                                 <NavLink  to={`/${a}`} className='text-sm text-left align-bottom px-5 py-2 dark:text-slate-400 text-slate-700  dark:hover:text-slate-200  hover:text-slate-900 hover:font-black capitalize leading-5' >
                                   {`${a}`}
                                </NavLink>
                               </li>
                            ))}
                              
                
                        </ul>



                        <div className="flex gap-3">
                            <button onClick={handleMood} className='px-2 text-base dark:text-indigo-300'>
                                {dark ? <Sun size={18} /> : <Moon size={18} />}
                            </button>
                            <button className='ghostBtn btn self-end hidden lg:inline-block dark:text-slate-400 text-slate-700 hover:bg-indigo-400 hover:bg-opacity-30 dark:hover:text-slate-200  hover:text-slate-900 hover:font-black font-input-sans text-sm'>
                                Log in
                            </button>
                            <button className='ghostBtn btn self-end hidden lg:inline-block dark:text-indigo-300 text-indigo-800 hover:bg-opacity-10 hover:bg-indigo-400 dark:hover:text-slate-200  hover:text-slate-900 hover:font-black font-input-sans text-sm'>
                                Join
                            </button>
                            <button onClick={toggleBar} className='lg:hidden text-indigo-800 dark:text-indigo-300 '>
                                {isOpen ? <X size={28} className='dark:text-white text-black' /> : <AlignJustify size={28} className='dark:text-white text-black' />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {isOpen && (


                <div className='w-full flex flex-col lg:hidden fixed bg-indigo-100 dark:bg-slate-900  globalBG pt-20 h-screen'>
                    
                    {["project", "templates", "components", "blog"].map((a, index) => (
                        <NavLink onClick={toggleBar} className='text-sm text-left align-bottom px-5 py-2 ark:text-slate-400 text-slate-700 dark:hover:text-slate-200   hover:text-slate-900 hover:font-black  leading-5' key={index} to={`/${a}`}>
                            <span className='font-input-sans capitalize'>{a}</span>
                        </NavLink>
                    ))}
                 
                   <button className='ghostBtn btn mx-5 my-2    dark:text-slate-400 text-slate-700 hover:bg-indigo-400 hover:bg-opacity-30 dark:hover:text-slate-200  hover:text-slate-900 hover:font-black font-input-sans text-sm'>
                                Log in
                            </button>
                            <button className='ghostBtn btn mx-5 my-2   dark:text-indigo-300 text-indigo-800 hover:bg-opacity-10 hover:bg-indigo-400 dark:hover:text-slate-200  hover:text-slate-900 hover:font-black font-input-sans text-sm'>
                                Join
                            </button>
                 
                </div>
            )}
        </>
    );
};

export default Header
