import React from 'react';
import Header from '../Components/Header/Header';
import Home from '../Pages/Home/Home';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div >
           <Header/>
           <div className='md:px-10'>
           
           </div>
           <Outlet/>
        </div>
    );
};

export default Root;