import React from 'react';


import HiRobot from '../../../Assets/Images/HiRobot.json';
import Lottie from 'react-lottie';
const AboutPage = () => {
    
    const robot = {
        loop: true,
        autoplay: true,
        animationData: HiRobot,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
        
      };
  return (
    <div className="mt-2 md:p-[0.5px] rounded-sm bg-gradient-to-tr dark:from-slate-600 dark:to-teal-600">
      <div className="flex flex-col  gap-2 bg-indigo-200 dark:bg-slate-800 globalBG rounded-sm lg:p-3 md:p-4 p-2 box-border">
        <div className="flex rounded-sm justify-center items-center relative">
          <div className="w-full grid lg:grid-cols-12 gap-2 items-center justify-center p-3">
            <div className="lg:col-span-3 col-span-12 bannarCard h-full rounded-sm bg-gradient-to-tr dark:from-slate-600 dark:to-teal-600">
              <div className="bg-cover bg-top bg-no-repeat h-full" style={{ backgroundImage: `url('/profile-image.jpg')` }}>
                {/* <img src="" alt="Profile" /> */}
                <div className="w-full max-w-44 md:max-w-52  lg:max-w-[90%] mx-auto relative -mb-4 -top-5">
      <Lottie options={robot} />
    </div>
              </div>
            </div>
            <div className="lg:col-span-9 col-span-12 bannarCard  rounded-sm bg-gradient-to-tr dark:from-slate-600 dark:to-teal-600">
              
               
                

<div className=' w-full p-4 md:row-span-2 lg:order-3 md:order-2 md:col-span-3 lg:col-span-6 order-3 lg:row-span-4'>

          


<div className="text-lg md:text-2xl  dark:text-slate-200 mb-2 text-slate-800  font-medium leading-tight md:leading-snug tracking-tight md:tracking-normal font-input-sans">About me</div>


<div className="text-sm -mt-2 md:text-base dark:text-slate-400 cursor-default  text-slate-600  font-light leading-relaxed md:leading-loose tracking-normal md:tracking-wide font-plex-sans">
<div className="text-sm -mt-2 md:text-base dark:text-slate-400 cursor-default text-slate-600 font-light leading-relaxed md:leading-loose tracking-normal md:tracking-wide font-plex-sans">
  Hi, I'm <span className="font-black text-teal-600 dark:text-teal-300">Shahed Ahmed</span>, a passionate software developer from Ishwardi, Bangladesh. I specialize in <span className="font-bold underline text-teal-600 dark:text-teal-300">TypeScript</span>, <span className="font-bold underline text-teal-600 dark:text-teal-300">JavaScript</span>, and <span className="font-bold underline text-teal-600 dark:text-teal-300">Swift</span> programming. My expertise spans backend solutions with <span className="font-bold underline text-teal-600 dark:text-teal-300">Node.js</span> and frontend development with <span className="font-bold underline text-teal-600 dark:text-teal-300">Next.js</span> and <span className="font-bold underline text-teal-600 dark:text-teal-300">React.js</span>. I focus on building scalable, high-performance software solutions that are both efficient and user-centric, with a particular interest in creating dynamic applications using the MERN stack.
</div>


<div className="mt-4">
                        <div className="text-sm dark:text-slate-400 text-slate-600 font-light leading-relaxed tracking-normal">
                          <span className="font-black font-input-sans text-teal-600 dark:text-teal-300">Education</span>
                        </div>
                        <ul className="list-disc list-inside">
                          {[`HSC Completion: Finished my Higher Secondary Certificate (HSC)`,
                          "Current Pursuit: Currently pursuing a BA degree.",
                          "Development Training: Completed comprehensive web development training from Programming Hero, focusing on the Building with application."].map((feature, i) => (
                            <li key={i}>{feature}</li>
                          ))}
                        </ul>
                      </div>
</div>



</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  );
};

export default AboutPage;
