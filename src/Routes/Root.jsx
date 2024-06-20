import React from 'react';
import Header from '../Components/Header/Header';
import Home from '../Pages/Home/Home';

const Root = () => {
    return (
        <div className='text-3xl font-bold font-[Ariel] capitalize'>
           <Header/>
           <Home/>
        </div>
    );
};

export default Root;