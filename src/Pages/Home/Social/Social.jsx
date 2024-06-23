
import { Clock, Download, Facebook, Github, Linkedin, Mail, MoveUpRight } from 'lucide-react';

import React from 'react';

const Social = () => {
    return (
        <div className='my-4 md:p-[0.5px] rounded-sm bg-gradient-to-tr dark:from-slate-600 dark:to-teal-600'>
           <div className=' flex justify-center items-center    commonBox bg-[#214162] dark:bg-slate-800 p-2'>
         
           


     <div className='grid  grid-cols-1 *:p-3 lg:grid-cols-8 w-full  h-full  gap-2 items-center justify-center'>




            <div className='lg:col-span-2  bannar-grid2-listItem commonBox  w-full h-full flex justify-center items-center gap-2'>
              <div>
                
                <Mail  size={12} className='text-teal-300 ' />
              </div>
              <h6 className="text-base md:text-xs font-black text-slate-200 leading-tight md:leading-snug tracking-tight md:tracking-normal font-plex-sans">shahedahmedutsho@gmail.com</h6>
            </div>



            <a href='https://www.linkedin.com/in/shahedahmedutsho/' target='_blank' className='lg:col-span-1 w-full flex justify-center dark:hover:bg-teal-800 hover:bg-[#2c5d85] box-border items-center gap-2 h-full bannar-grid2-listItem commonBox p-1'>
              <Linkedin size={12} className='text-teal-300 ' />
              <h6 className="text-base md:text-xs font-black text-slate-200  leading-tight md:leading-snug tracking-tight md:tracking-normal font-plex-sans">Linkdin</h6>
            </a>
            <a href='https://github.com/ShahedAhmedUtsho' target='_blank' className='lg:col-span-1 w-full flex justify-center dark:hover:bg-teal-800 hover:bg-[#2c5d85] items-center gap-2 h-full bannar-grid2-listItem commonBox p-1'>
              <Github size={12} className='text-teal-300 ' />
              <h6 className="text-base md:text-xs font-black text-slate-200  leading-tight md:leading-snug tracking-tight md:tracking-normal font-plex-sans">Github</h6>
            </a>
            <a href='https://www.facebook.com/iAmShahedAhmed/' target='_blank' className='lg:col-span-1 w-full flex justify-center dark:hover:bg-teal-800 hover:bg-[#2c5d85]  items-center gap-2 h-full bannar-grid2-listItem commonBox p-1'>
              <Facebook  size={12} className='text-teal-300 ' />
              <h6 className="text-base md:text-xs font-black text-slate-200 leading-tight md:leading-snug tracking-tight md:tracking-normal font-plex-sans">Facebook</h6>
            </a>


            <button  onClick={() => {  }} className='col-span-1  lg:col-start-8   cursor-pointer flex justify-center items-center transition-all duration-75 hover:bg-[#376da474] dark:hover:bg-teal-400  gap-2 w-full h-full bg-[#376da4] dark:bg-teal-500 commonBox p-1'>
              <MoveUpRight size={12} className='dark:text-slate-900 text-slate-200' />
              <h6 className="text-base md:text-xs font-black dark:text-slate-900 text-slate-200 leading-tight md:leading-snug tracking-tight md:tracking-normal  font-input-sans">Contact</h6>
            </button>


      </div>







        </div>
           </div>
       
    );
};

export default Social;