import React from 'react';
import Banner from './Bannar/Banner';
import ProjectsSection from './Projects/ProjectsSection';
import Social from './Social/Social';




const Home = () => {
    return (
        <div className='globalBG dark:bg-slate-900 bg-indigo-100   pt-[72px] md:px-10 min-h-screen'>
<Banner/>
<Social/>
<ProjectsSection/>

            
        </div>
    );
};

export default Home;