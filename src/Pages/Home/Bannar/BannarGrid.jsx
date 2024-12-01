import React, { useContext, useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';

import GreenDot from '../../../Assets/Images/greenDot.json';
import HiRobot from '../../../Assets/Images/HiRobot.json';
import HiHand from '../../../Assets/Images/HiHand 2.json';
import Lottie from 'react-lottie';
import confetti from 'https://cdn.skypack.dev/canvas-confetti';
import createGlobe from 'cobe';
import moment from 'moment';
import { AuthContext } from '../../../Privider/Provider';
import { Clock, Download, MapPin } from 'lucide-react';

const BannarGrid = () => {
  const canvas = useRef();
  const { dark } = useContext(AuthContext);
  const profile = dark ? "https://i.ibb.co/j8scgFn/cercle-Dark.webp" : "https://i.ibb.co/F68gwYG/cercle-Light.webp";
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
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment().format('dddd, MMMM D, YYYY hh:mm:ss A'));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (canvas.current) {
      let phi = 0;
      createGlobe(canvas.current, {
        devicePixelRatio: 1,
        width: 600,
        height: 600,
        phi: 0,
        speed: 1,
        theta: 0,
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

  return (
    <div className='my-4 md:p-[0.5px] rounded-sm bg-gradient-to-tr dark:from-slate-600 dark:to-teal-600'>
      <Helmet>
        <title>Shahed Ahmed - MERN Stack Developer</title>
        <meta name="description" content="Shahed Ahmed's portfolio as a MERN stack Software developer specializing in front-end development with React.js and Tailwind CSS." />
        <meta property="og:title" content="Shahed Ahmed - MERN Stack Developer" />
        <meta property="og:description" content="Shahed Ahmed's portfolio as a MERN stack developer specializing in front-end development with React.js and Tailwind CSS." />
        <meta property="og:image" content="https://your-portfolio-url.com/logo.png" />
        <meta property="og:url" content="https://your-portfolio-url.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shahed Ahmed - MERN Stack Developer" />
        <meta name="twitter:description" content="Shahed Ahmed's portfolio as a MERN stack developer specializing in front-end development with React.js and Tailwind CSS." />
        <meta name="twitter:image" content="https://your-portfolio-url.com/logo.png" />
      </Helmet>
      <div className='grid lg:max-h-[500px] min-h-[1100px] md:min-h-96 gap-3 bg-indigo-200 dark:bg-slate-800 lg:grid-rows-5 md:grid-rows-4 md:grid-cols-4 lg:grid-cols-12 globalBG rounded-sm *:rounded-sm lg:p-6 md:p-4 p-2 box-border'>
        <div className='border bannarCard md:row-span-2 md:order-1 order-3 border-black w-full lg:col-span-3 lg:row-span-5 col-span-1 overflow-hidden'>
          <img src={profile} className='object-cover w-full h-full' alt="Shahed Ahmed" />
        </div>

        <div className='border bannarCard border-black md:min-h-fit min-h-44 w-full md:col-span-2 md:row-span-2 lg:order-2 md:order-3 lg:col-span-9 order-1 lg:row-span-1'>
          <div className='grid grid-cols-1 lg:grid-cols-5 w-full h-full p-2 gap-2 items-center justify-center'>
            <div className='col-span-1 bannar-grid2-listItem commonBox w-full h-full flex justify-center items-center gap-2'>
              <div>
                <Lottie options={defaultOptions} height={20} width={20} />
              </div>
              <p className="text-base md:text-xs font-black dark:text-slate-200 text-slate-800 leading-tight md:leading-snug tracking-tight md:tracking-normal font-plex-sans">Available for work</p>
            </div>

            <div className='lg:col-span-3 w-full flex justify-center items-center gap-2 h-full bannar-grid2-listItem commonBox p-1'>
              <Clock size={12} className='dark:text-teal-300 text-slate-600' />
              <p className="text-base md:text-xs font-black dark:text-slate-200 text-slate-800 leading-tight md:leading-snug tracking-tight md:tracking-normal font-plex-sans">{currentTime}</p>
            </div>

            <a href='resume.pdf'   aria-label='download resume' download="Shahed_Ahmed_Resume.pdf" onClick={() => { confetti() }} className='col-span-1 cursor-pointer flex justify-center items-center transition-all duration-75 dark:hover:bg-teal-900 hover:bg-indigo-300 gap-2 w-full h-full bannar-grid2-listItem commonBox p-1'>
              <Download size={12} className='dark:text-teal-300 text-slate-600' />
              <p className="text-base md:text-xs font-black dark:text-slate-200 text-slate-800 leading-tight md:leading-snug tracking-tight md:tracking-normal font-plex-sans">resume</p>
            </a>
          </div>
        </div>

        <div className='border bannarCard border-black w-full p-4 md:row-span-2 lg:order-3 md:order-2 md:col-span-3 lg:col-span-6 order-3 lg:row-span-4'>
          <p className="text-xs md:text-xs mb-[0.5px] font-black dark:text-slate-400 text-slate-600 leading-tight md:leading-snug tracking-tight md:tracking-normal font-plex-sans uppercase">Hi there, I am</p>
          <div className="text-2xl md:text-4xl cursor-default font-semibold leading-tight flex md:leading-snug tracking-tight md:tracking-normal font-input-sans dark:text-slate-200 text-slate-800 relative">
            <h1 className=''>Shahed Ahmed</h1>
            {dark ?
              <div className="w-20 relative -mb-4 -top-5">
                <Lottie options={robot} />
              </div> :
              <div className="w-16 relative -top-4 left-3">
                <Lottie options={hand} />
              </div>
            }
          </div>

          <div className="text-sm -mt-2 md:text-base dark:text-slate-400 cursor-default text-slate-600 font-light leading-relaxed md:leading-loose tracking-normal md:tracking-wide font-plex-sans">
  I am a <span className="font-black text-teal-600 dark:text-teal-300">Software Developer</span> with a passion for crafting efficient and scalable software solutions. Skilled in modern technologies like <span className="font-bold underline font-input-sans">JavaScript</span>, <span className="font-bold underline font-input-sans">TypeScript</span>, <span className="font-bold underline font-input-sans">Node.js</span>, <span className="font-bold underline font-input-sans">React.js</span>, and <span className="font-bold underline font-input-sans">Next.js</span>, I build seamless user interfaces and powerful backend systems. My expertise extends to databases like <span className="font-bold underline font-input-sans">MongoDB</span>, enabling me to deliver robust full-stack applications. Additionally, I am exploring <span className="font-bold underline font-input-sans">Swift</span> programming to expand my capabilities in Mac and iOS operating systems
</div>

        </div>

        <div className='border bannarCard min-h-52 md:min-h-fit border-black w-full md:row-span-2 lg:order-4 md:order-4 md:col-span-2 lg:col-span-3 order-4 lg:row-span-4 relative overflow-hidden'>
          <canvas ref={canvas} width="600" className='max-w-72 absolute -z-10 top-0 right-0' height="600"></canvas>
          <div className='flex w-full p-2 gap-1'>
            <div className='col-span-4 w-4/5 z-20 flex justify-start items-center transition-all duration-75 gap-2 py-2 px-4 bannar-grid2-listItem commonBox p-1'>
              <p className="text-base md:text-xs font-black dark:text-slate-200 text-slate-800 leading-tight md:leading-snug tracking-tight md:tracking-normal cursor-default font-plex-sans">Ishwardi, Pabna</p>
            </div>
            <div className='w-1/5 z-20 flex justify-center items-center transition-all duration-75 gap-1 py-2 text-center bannar-grid2-listItem commonBox p'>
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
