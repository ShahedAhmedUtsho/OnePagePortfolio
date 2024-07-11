






import React from 'react';
import { Helmet } from 'react-helmet';
import Banner from './Bannar/Banner';
import ProjectsSection from './Projects/ProjectsSection';
import Social from './Social/Social';
import HomePage from '../Test/Test';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
    return (
      <>
        {/* <Helmet>
            <title>Shahed Ahmed - Home</title>
            <meta name="description" content="Welcome to the home page of Shahed Ahmed's portfolio. Explore projects, skills, and contact information." />
            <meta property="og:title" content="Shahed Ahmed - Home" />
            <meta property="og:description" content="Welcome to the home page of Shahed Ahmed's portfolio. Explore projects, skills, and contact information." />
            <meta property="og:image" content="https://shahed-ahmed23.imgbb.com/" />
            <meta property="og:url" content="https://www.shahedahmed.tech/" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Shahed Ahmed - Home" />
            <meta name="twitter:description" content="Welcome to the home page of Shahed Ahmed's portfolio. Explore projects, skills, and contact information." />
            <meta name="twitter:image" content="https://shahed-ahmed23.imgbb.com/" />
        </Helmet> */}
        <div className='globalBG dark:bg-slate-900 bg-indigo-100   pt-[72px] md:px-10 min-h-screen'>

<HomePage/>

            
        </div>
        <Footer />
      </>
    );
};

export default Home;
