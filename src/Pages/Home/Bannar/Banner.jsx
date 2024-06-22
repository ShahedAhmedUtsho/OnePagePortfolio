import React from 'react';
import { Link } from 'react-router-dom';
import BannarGrid from './BannarGrid';


const Banner = () => {
  return (
    <div className='globalBG dark:bg-slate-900 bg-indigo-100   pt-[72px] md:px-10 min-h-screen'>
<div className=' lg:mx-auto'>
<BannarGrid/>
      {/* <div  className={`' min-h-96 bannarBG   rounded-sm '` } >

      </div> */}
</div>
    
     
      
    </div>
  );
};

export default Banner;
