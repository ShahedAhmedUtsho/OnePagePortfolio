import React from 'react';


const Banner = () => {
  return (
    <div className='globalBG bg-slate-800'>
      <div className='HeroHead'>
      <h2 className=' heroText responsiveText '>
      Achieve mastery
      
      </h2>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition font-input-sans text-base md:text-lg font-medium leading-normal md:leading-relaxed tracking-tight md:tracking-normal">
  Primary Button
</button>
<h1 className=" font-light leading-tight text-transparent bg-gradient-to-r from-[#f29871] to-[#ff4d4d] bg-clip-text">
      <span className=" font-input-sans">Your Text Here</span>
    </h1>

    <div className="text-4xl md:text-6xl font-bold leading-tight md:leading-snug tracking-tight md:tracking-normal font-input-sans">Heading 1</div>
<div className="text-3xl md:text-5xl font-semibold leading-tight md:leading-snug tracking-tight md:tracking-normal font-input-sans">Heading 2</div>
<div className="text-2xl md:text-4xl font-semibold leading-tight md:leading-snug tracking-tight md:tracking-normal font-input-sans">Heading 3</div>
<div className="text-xl md:text-3xl font-medium leading-tight md:leading-snug tracking-tight md:tracking-normal font-input-sans">Heading 4</div>
<div className="text-lg md:text-2xl font-medium leading-tight md:leading-snug tracking-tight md:tracking-normal font-input-sans">Heading 5</div>
<div className="text-base md:text-xl font-medium leading-tight md:leading-snug tracking-tight md:tracking-normal font-input-sans">Heading 6</div>

      </div>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Color Palette</h1>

        {/* Light Theme Colors */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Light Theme</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="bg-indigo-600 text-white p-4 rounded-lg">
              indigo-600
            </div>
            <div className="bg-amber-500 text-white p-4 rounded-lg">
              amber-500
            </div>
            <div className="bg-teal-500 text-white p-4 rounded-lg">
              teal-500
            </div>
            <div className="bg-gray-100 text-gray-800 p-4 rounded-lg">
              gray-100
            </div>
            <div className="bg-gray-800 text-gray-100 p-4 rounded-lg">
              gray-800
            </div>
            <div className="bg-blue-600 text-white p-4 rounded-lg">
              blue-600
            </div>
          </div>
        </div>

        {/* Dark Theme Colors */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Dark Theme</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="bg-indigo-600 text-white p-4 rounded-lg">
              indigo-600
            </div>
            <div className="bg-amber-500 text-white p-4 rounded-lg">
              amber-500
            </div>
            <div className="bg-teal-500 text-white p-4 rounded-lg">
              teal-500
            </div>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg">
              gray-900
            </div>
            <div className="bg-gray-100 text-gray-800 p-4 rounded-lg">
              gray-100
            </div>
            <div className="bg-blue-400 text-white p-4 rounded-lg">
              blue-400
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </div>
  );
};

export default Banner;
