import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { Clock, Download, Facebook, Github, Linkedin, Mail, MoveUpRight } from 'lucide-react';
import Lottie from 'react-lottie';

import reactIcon from "../../../../public/skills-icons/react.svg"
import css from "../../../../public/skills-icons/css.svg"
import firebase from "../../../../public/skills-icons/firebase.svg"
import html from "../../../../public/skills-icons/gtml.svg"
import jwt from "../../../../public/skills-icons/icons8-jwt.svg"
import expressjs from "../../../../public/skills-icons/icons8-express-js.svg"
import mongodb from "../../../../public/skills-icons/mongodb.svg"
import js from "../../../../public/skills-icons/icons8-javascript.svg"


const ProjectsSection = () => {
    return (
      
        <div className='mt-2 md:p-[0.5px] rounded-sm bg-gradient-to-tr dark:from-slate-600 dark:to-teal-600'>
          
        <div className='  flex flex-col   md:min-h-96 gap-2 bg-indigo-200 dark:bg-slate-800    globalBG rounded-sm *:rounded-sm lg:p-6 md:p-4 p-2  box-border'>
       


       
        <div className=' flex justify-center items-center     ' >
           


           <div className='  grid    *:p-3 lg:grid-cols-12 w-full    h-full  gap-2 items-center justify-center '>

<div navigation={true}  className="mySwiper lg:order-1   relative min-h-80 mb-2 lg:mb-0 bannarCard h-full w-full col-span-12     lg:col-span-3 ">
       <div className='bg-[url("https://i.ibb.co/LnJfd99/1718779217702.jpg")] bg-cover   bg-top bg-no-repeat h-full '>
       
        
         </div>
      
       
     </div>

<div className=' min-h-80 bannarCard lg:order-2  col-span-12 lg:col-span-9'>


   
<div className='      md:min-h-fit min-h-44 w-full md:col-span-2 md:row-span-2 lg:order-2 md:order-3 lg:col-span-9 order-1 lg:row-span-1'>
   
<div className=' border-black w-full  p-4 md:row-span-2 lg:order-3 md:order-2 md:col-span-3 lg:col-span-6 order-3 lg:row-span-4'>

         
       <h6 className="text-xs md:text-xs mb-[0.5px]  font-black dark:text-slate-400  text-slate-600 leading-tight md:leading-snug tracking-tight md:tracking-normal font-plex-sans uppercase">Mern Stack</h6>

 <div className="text-lg dark:text-slate-200  text-slate-800 md:text-2xl font-medium leading-tight md:leading-snug tracking-tight md:tracking-normal font-input-sans">MediCamps</div>


 <div className="text-sm md:text-base dark:text-slate-400 cursor-default text-slate-600 font-light leading-relaxed md:leading-loose tracking-normal md:tracking-wide font-plex-sans">
 Medicamps is a <span className="font-black text-teal-600 dark:text-teal-300">free medical camps management website</span>. It allows users to see available camps and offers features for managing and organizing medical camps effectively. Organizers can host medical camps, and participants can register for those camps. The admin has a dashboard, and participants have a profile and a dashboard where they can check <span className="underline font-black text-teal-600 dark:text-teal-300">payments</span> and all registrations.
 
 <div className="mt-4">
 <div className="text-sm md:text-base dark:text-slate-400 cursor-default text-slate-600 font-light leading-relaxed md:leading-loose tracking-normal md:tracking-wide font-plex-sans"><span className="font-black text-teal-600 dark:text-teal-300"> some features</span>
 </div>
   <ul className="list-disc list-inside">
     <li>User authentication and management</li>
     <li>Responsive design for all Device</li>
     <li> payment getaway</li>
   </ul>
 </div>
</div>




       </div>




<div className=' min-h-14  flex  w-full  p-2 gap-2 items-center '>
   
          {

[
 reactIcon,
 css,
 firebase,
 html,
 jwt,
 expressjs,
 mongodb,
 js
].map((a,index)=>  <div key={index} className='col-span-1  bannar-grid2-listItem  commonBox  flex justify-center items-center gap-2'>
            
<h6 className="text-base md:text-xs font-black dark:text-slate-200 text-slate-800 leading-tight md:leading-snug tracking-tight md:tracking-normal font-plex-sans"> 

<img className='  p-2 border-box' src={a} alt="" />

</h6>
</div> )
          }
         </div>


{/* <div className='commonBox min-h-72'>

</div> */}



</div>

</div>








            </div>




           </div>
          
        
          


         






       
       <div>
  
</div>

       
<div className=' flex justify-center items-center      ' >
           


           <div className='  grid    *:p-3 lg:grid-cols-12 w-full    h-full  gap-2 items-center justify-center '>

<div navigation={true}  className="mySwiper lg:order-2  relative min-h-80 mb-2 lg:mb-0 bannarCard h-full w-full col-span-12     lg:col-span-3 ">
       <div className='bg-[url("https://i.ibb.co/Q6yRnkH/screencapture-assignment-10-6777f-web-app-2024-07-04-01-57-14.png")] bg-cover   bg-top bg-no-repeat h-full '>
       
        
         </div>
      
       
     </div>

<div className=' min-h-80 bannarCard lg:order-1  col-span-12 lg:col-span-9'>


   
<div className='      md:min-h-fit min-h-44 w-full md:col-span-2 md:row-span-2 lg:order-2 md:order-3 lg:col-span-9 order-1 lg:row-span-1'>
   
<div className=' border-black w-full  p-4 md:row-span-2 lg:order-3 md:order-2 md:col-span-3 lg:col-span-6 order-3 lg:row-span-4'>

         
       <h6 className="text-xs md:text-xs mb-[0.5px]  font-black dark:text-slate-400  text-slate-600 leading-tight md:leading-snug tracking-tight md:tracking-normal font-plex-sans uppercase">Mern Stack</h6>

 <div className="text-lg dark:text-slate-200  text-slate-800 md:text-2xl font-medium leading-tight md:leading-snug tracking-tight md:tracking-normal font-input-sans"> PicassoPallet</div>


 <div className="text-sm md:text-base dark:text-slate-400 cursor-default text-slate-600 font-light leading-relaxed md:leading-loose tracking-normal md:tracking-wide font-plex-sans">
 Picassopallet is a <span className="font-black text-teal-600 dark:text-teal-300">gateway to the world of art</span>.  . Explore, create, and connect with artists and paintings that inspire you. This is a <span className="underline font-black text-teal-600 dark:text-teal-300">painting selling  </span>website where artists and art enthusiasts can come together to buy and sell paintings. payments and all registrations.
 
 <div className="mt-4">
 <div className="text-sm md:text-base dark:text-slate-400 cursor-default text-slate-600 font-light leading-relaxed md:leading-loose tracking-normal md:tracking-wide font-plex-sans"><span className="font-black text-teal-600 dark:text-teal-300"> some features</span>
 </div>
   <ul className="list-disc list-inside">
   
     <li>Dynamic Routing</li>
              <li>Responsive in all Device</li>
              <li>Painting Listings: Browse through a wide range of paintings from various artists, sorted by categories.</li>
              <li>User Authentication</li>
              <li>Dark Mode and Light Mode</li>
   </ul>
 </div>
</div>




       </div>




<div className=' min-h-14  flex  w-full  p-2 gap-2 items-center '>
   
          {

[
 reactIcon,
 css,
 firebase,
 html,
 jwt,
 expressjs,
 mongodb,
 js
].map((a,index)=>  <div key={index} className='col-span-1  bannar-grid2-listItem  commonBox  flex justify-center items-center gap-2'>
            
<h6 className="text-base md:text-xs font-black dark:text-slate-200 text-slate-800 leading-tight md:leading-snug tracking-tight md:tracking-normal font-plex-sans"> 

<img className='  p-2 border-box' src={a} alt="" />

</h6>
</div> )
          }
         </div>


{/* <div className='commonBox min-h-72'>

</div> */}



</div>

</div>








            </div>




           </div>
          
        
          


         






       
       <div>
  
</div>

       
<div className=' flex justify-center items-center      ' >
           


           <div className='  grid    *:p-3 lg:grid-cols-12 w-full    h-full  gap-2 items-center justify-center '>

<div navigation={true}  className="mySwiper lg:order-1  relative min-h-80 mb-2 lg:mb-0 bannarCard h-full w-full col-span-12     lg:col-span-3 ">
       <div className='bg-[url("https://i.ibb.co/dGw66BN/screencapture-assignment-11-f266c-web-app-2024-07-04-02-20-09.png")] bg-cover   bg-top bg-no-repeat h-full '>
       
        
         </div>
      
       
     </div>

<div className=' min-h-80 bannarCard lg:order-2  col-span-12 lg:col-span-9'>


   
<div className='      md:min-h-fit min-h-44 w-full md:col-span-2 md:row-span-2 lg:order-2 md:order-3 lg:col-span-9 order-1 lg:row-span-1'>
   
<div className=' border-black w-full  p-4 md:row-span-2 lg:order-3 md:order-2 md:col-span-3 lg:col-span-6 order-3 lg:row-span-4'>

         
       <h6 className="text-xs md:text-xs mb-[0.5px]  font-black dark:text-slate-400  text-slate-600 leading-tight md:leading-snug tracking-tight md:tracking-normal font-plex-sans uppercase">Mern Stack</h6>

 <div className="text-lg dark:text-slate-200  text-slate-800 md:text-2xl font-medium leading-tight md:leading-snug tracking-tight md:tracking-normal font-input-sans">ShareBite</div>


 <div className="text-sm md:text-base dark:text-slate-400 cursor-default text-slate-600 font-light leading-relaxed md:leading-loose tracking-normal md:tracking-wide font-plex-sans">
 ShareBite is a <span className="font-black text-teal-600 dark:text-teal-300">cutting-edge MERN stack project</span> designed to combat food insecurity by connecting food donors with individuals in need.  The platform ensures a seamless experience for users, from contributing food donations to requesting assistance.This full-stack web application leverages MongoDB, Express.js, React, and Node.js to deliver a seamless and efficient user experience
 
 <div className="mt-4">
 <div className="text-sm md:text-base dark:text-slate-400 cursor-default text-slate-600 font-light leading-relaxed md:leading-loose tracking-normal md:tracking-wide font-plex-sans"><span className="font-black text-teal-600 dark:text-teal-300"> some features</span>
 </div>
   <ul className="list-disc list-inside">
     <li>User authentication and management</li>
     <li>Responsive design for all Device</li>
     <li> request and Donate food</li>
     
   </ul>
 </div>
</div>




       </div>




<div className=' min-h-14  flex  w-full  p-2 gap-2 items-center '>
   
          {

[
 reactIcon,
 css,
 firebase,
 html,
 jwt,
 expressjs,
 mongodb,
 js
].map((a,index)=>  <div key={index} className='col-span-1  bannar-grid2-listItem  commonBox  flex justify-center items-center gap-2'>
            
<h6 className="text-base md:text-xs font-black dark:text-slate-200 text-slate-800 leading-tight md:leading-snug tracking-tight md:tracking-normal font-plex-sans"> 

<img className='  p-2 border-box' src={a} alt="" />

</h6>
</div> )
          }
         </div>


{/* <div className='commonBox min-h-72'>

</div> */}



</div>

</div>








            </div>




           </div>
          
        
          


         






       
       <div>
  
</div>
           </div>
       </div>
    );
};



export default ProjectsSection;