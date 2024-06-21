import { AlignJustify, AlignLeft, X } from 'lucide-react';
import { List } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
    const [lastScrollPosition, setLastScrollPosition] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

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
            <div className={`w-full globalBG fixed left-0 transition-all z-[999] duration-300 ${visible ? "top-0" : "-top-20"} right-0 m-auto border-b border-slate-500 bg-indigo-100 dark:bg-gray-950 leading-6 min-h-[72px] md:px-10 flex font-input-sans items-center`}>
                <div className='flex gap-3 items-center w-full h-full'>
                    <div className='logo flex items-center'>
                        <Link to="/" className='font-input-sans text-3xl dark:text-slate-400'>
                            Shahed
                        </Link>
                    </div>
                    <div className='flex lg:justify-between justify-end items-center w-full'>
                        <nav className='capitalize hidden lg:block'>
                            {["project", "templates", "components", "blog"].map((a, index) => (
                                <NavLink className='text-sm text-left align-bottom px-5 py-2 text-slate-400 hover:text-slate-300 leading-5' key={index} to={`/${a}`}>
                                    <span className='font-input-sans capitalize'>{a}</span>
                                </NavLink>
                            ))}
                        </nav>
                        <div className="flex gap-3">
                            <button className='ghostBtn btn self-end hidden lg:inline-block text-slate-400 font-input-sans text-sm'>
                                Log in
                            </button>
                            <button className='btn border hidden lg:inline-block border-indigo-300 text-indigo-300 font-input-sans text-sm'>
                                Join
                            </button>
                            <button onClick={toggleBar} className='lg:hidden text-indigo-300'>
                                {isOpen ? <X size={28} className='text-white' /> : <AlignJustify size={28} className='text-white' />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            {isOpen && (
                <div className='w-full flex flex-col lg:hidden fixed  bg-slate-800 globalBG pt-20 h-screen'>
                    {["project", "templates", "components", "blog"].map((a, index) => (
                        <NavLink onClick={toggleBar} className='text-sm text-left align-bottom px-5 py-2 text-slate-400 hover:text-slate-300 leading-5' key={index} to={`/${a}`}>
                            <span className='font-input-sans capitalize'>{a}</span>
                        </NavLink>
                        
                    ))}
                     <button onClick={toggleBar} className='ghostBtn btn mx-5 my-2  text-slate-400 font-input-sans text-sm'>
                                Log in
                            </button>

                            <button onClick={toggleBar} className='btn border  mx-5 my-2  border-indigo-300 text-indigo-300 font-input-sans text-sm'>
                                Join
                            </button>
                           
                </div>
            )}


        </>
    );
};

export default Header;
