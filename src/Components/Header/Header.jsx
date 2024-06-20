import React, { useEffect, useState } from 'react';

const Header = () => {
    const [lastScrollPosition,setLastScrollPosition] = useState(window.pageYOffset) ;
    const [visible,setVisible] = useState(true)

const handleScroll = ()=>{
    console.log(lastScrollPosition)
    const currentPosition = window.pageYOffset ; 
    const scrollUp = lastScrollPosition > currentPosition
   
   setVisible(scrollUp || currentPosition < 10)
console.log(visible)
    setLastScrollPosition(window.pageYOffset)
}


useEffect(() => {
  window.addEventListener('scroll',handleScroll)

  return () => {
    window.removeEventListener('scroll',handleScroll)
  }
}, [lastScrollPosition])











    return (
        <div className={`w-full globalBG fixed left-0 transition-all  z-[999]  ${visible?"top-0":"-top-20"}  right-0 m-auto border-b border-slate-500 dark:text-slate-400 bg-indigo-100 dark:bg-gray-950 leading-6 min-h-[72px] md:px-10 flex  font-input-sans items-center `}  >
           header
        </div>
    );
};

export default Header;