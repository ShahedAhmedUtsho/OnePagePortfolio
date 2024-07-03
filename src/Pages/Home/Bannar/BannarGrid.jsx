import React, { useContext, useEffect, useRef, useState } from 'react';
import ProfileDark from '../../../Assets/Images/normalDark.png';
import ProfileLight from '../../../Assets/Images/normalLight.png';
import cercleDark from '../../../Assets/Images/cercleDark.png';
import cercleLight from '../../../Assets/Images/cercleLight.png';
import GreenDot from '../../../Assets/Images/greenDot.json';
import HiRobot from '../../../Assets/Images/HiRobot.json';
import HiHand from '../../../Assets/Images/HiHand 2.json';
import Lottie from 'react-lottie';
import confetti from 'https://cdn.skypack.dev/canvas-confetti';
import createGlobe from 'cobe'
import moment from 'moment';
import { AuthContext } from '../../../Privider/Provider';
import { Clock, Download, Locate, LocateIcon, MapPin } from 'lucide-react';

const BannarGrid = () => {
  const canvas = useRef()
  const { dark } = useContext(AuthContext);
  const profile = dark ? cercleDark : cercleLight;
  
  const [currentTime, setCurrentTime] = useState(moment().format('dddd, MMMM D, YYYY hh:mm:ss A'));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: GreenDot,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const robot = {
    loop: true,
    autoplay: true,
    animationData: HiRobot,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
    
  };
  const hand = {
    loop: true,
    autoplay: true,
    animationData: HiHand,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment().format('dddd, MMMM D, YYYY hh:mm:ss A'));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  useEffect(() => {
    if (canvas.current) {
      let phi = 0;
      const globe = createGlobe(canvas.current, {
        devicePixelRatio: 1,
        width: 600,
        height: 600,
        phi: 0,
        speed: 1,
        theta:0,
        dark: 0,
        diffuse: 2,
        mapSamples: 20000,
        mapBrightness: 20,
        baseColor: [0.2, 0.4, 0.6], // Change this for different base color
        markerColor: [0.9, 0.1, 0.1], // Change this for different marker color
        glowColor: [0.8, 0.8, 1], // Change this for different glow color
        offset: [0, 0],
        markers: [
          { location: [23.6850, 90.3563], size: 0.07 }, // Bangladesh
          { location: [37.7595, -122.4367], size: 0.03 },
          { location: [40.7128, -74.006], size: 0.1 },
        ],
        onRender: (state) => {
          state.phi = phi;
          phi += 0.01;
        },
      });
    }
  }, []);
  //
  // const Hi =  dark? robot  : hand ;
  
  return (
    <div className='my-4 md:p-[0.5px] rounded-sm bg-gradient-to-tr dark:from-slate-600 dark:to-teal-600'>
      <div className='grid lg:max-h-[500px] min-h-[1100px] md:min-h-96 gap-3 bg-indigo-200 dark:bg-slate-800 lg:grid-rows-5 md:grid-rows-4 md:grid-cols-4 lg:grid-cols-12 globalBG rounded-sm *:rounded-sm lg:p-6 md:p-4 p-2 box-border'>
        <div className='border bannarCard md:row-span-2 md:order-1 order-3 border-black w-full lg:col-span-3 lg:row-span-5 col-span-1 overflow-hidden'>
          <img src={profile} className='object-cover w-full h-full' alt="" />
        </div>


        <div className='border bannarCard border-black md:min-h-fit min-h-44 w-full md:col-span-2 md:row-span-2 lg:order-2 md:order-3 lg:col-span-9 order-1 lg:row-span-1'>
          <div className='grid  grid-cols-1 lg:grid-cols-5 w-full h-full p-2 gap-2 items-center justify-center'>
            <div className='col-span-1 bannar-grid2-listItem commonBox w-full h-full flex justify-center items-center gap-2'>
              <div>
                <Lottie options={defaultOptions} height={20} width={20} />
              </div>
              <h6 className="text-base md:text-xs font-black dark:text-slate-200 text-slate-800 leading-tight md:leading-snug tracking-tight md:tracking-normal font-plex-sans">Available for work</h6>
            </div>

            <div className='lg:col-span-3 w-full flex justify-center items-center gap-2 h-full bannar-grid2-listItem commonBox p-1'>
              <Clock size={12} className='dark:text-teal-300 text-slate-600' />
              <h6 className="text-base md:text-xs font-black dark:text-slate-200 text-slate-800 leading-tight md:leading-snug tracking-tight md:tracking-normal font-plex-sans">{currentTime}</h6>
            </div>


            <a  href='resume.pdf' download="Shahed_Ahmed_Resume.pdf" onClick={() => { confetti() }} className='col-span-1 cursor-pointer flex justify-center items-center transition-all duration-75 dark:hover:bg-teal-900 hover:bg-indigo-300 gap-2 w-full h-full bannar-grid2-listItem commonBox p-1'>
              <Download size={12} className='dark:text-teal-300 text-slate-600' />
              <p className="text-base md:text-xs font-black dark:text-slate-200 text-slate-800 leading-tight md:leading-snug tracking-tight md:tracking-normal font-plex-sans">resume</p>
            </a>


          </div>
        </div>
        
        <div className='border bannarCard  border-black w-full p-4 md:row-span-2 lg:order-3 md:order-2 md:col-span-3 lg:col-span-6 order-3 lg:row-span-4'>

          
        <h6 className="text-xs md:text-xs mb-[0.5px] font-black dark:text-slate-400  text-slate-600 leading-tight md:leading-snug tracking-tight md:tracking-normal font-plex-sans uppercase">Hi there, I am</h6>
<div className="text-2xl md:text-4xl cursor-default font-semibold leading-tight flex md:leading-snug tracking-tight md:tracking-normal font-input-sans dark:text-slate-200 text-slate-800 relative">
  <h2 className=''>Shahed Ahmed</h2>
  {dark ? 
    <div className="w-20 relative -mb-4 -top-5">
      <Lottie options={robot} />
    </div> :
    <div className="w-16 relative -top-4 left-3">
      <Lottie options={hand} />
    </div>
  }
</div>

<div className="text-sm -mt-2 md:text-base dark:text-slate-400 cursor-default  text-slate-600  font-light leading-relaxed md:leading-loose tracking-normal md:tracking-wide font-plex-sans">
  I am a <span className="font-black text-teal-600 dark:text-teal-300 ">MERN stack developer</span> specializing in <span className="">front-end development</span>. With a strong focus on creating <span className="underline font-black text-teal-600 dark:text-teal-300">responsive websites</span> , I excel in <span className="font-bold underline font-input-sans ">React.js</span> and <span className="ont-bold underline font-input-sans ">Tailwind CSS</span> to build visually appealing and user-friendly interfaces. I also have experience with <span className="ont-bold underline font-input-sans ">MongoDB</span>, <span className="ont-bold underline font-input-sans ">Node.js</span>, and <span className="ont-bold underline font-input-sans">Express.js</span> to create seamless and efficient back-end solutions.
</div>



        </div>




        <div className='border bannarCard  min-h-52 md:min-h-fit  border-black w-full md:row-span-2 lg:order-4 md:order-4 md:col-span-2 lg:col-span-3 order-4  lg:row-span-4 relative overflow-hidden'>
    
<canvas ref={canvas} width="600" className='max-w-72 absolute -z-10 top-0 right-0 ' height="600"></canvas>
<div className='flex w-full   p-2 gap-1'>

<div   className='col-span-4 w-4/5 z-20  flex justify-start items-center transition-all duration-75  gap-2     py-2 px-4  bannar-grid2-listItem commonBox p-1'>



<h6 className="text-base md:text-xs font-black dark:text-slate-200 text-slate-800 leading-tight md:leading-snug tracking-tight md:tracking-normal cursor-default font-plex-sans">Ishwardi, Pabna</h6>
</div>
<div   className='w-1/5 z-20 flex justify-center     items-center transition-all duration-75  gap-1 py-2    text-center  bannar-grid2-listItem commonBox p'>


<MapPin size={12} className='dark:text-teal-300 text-slate-600' />
<h6 className="text-base md:text-xs font-black dark:text-slate-200 text-slate-800 leading-tight md:leading-snug tracking-tight md:tracking-normal cursor-default font-plex-sans">BD</h6>
</div>
</div>
        </div>
      </div>
    </div>
  );
};

export default BannarGrid;
