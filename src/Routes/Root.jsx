import React from 'react';
import Header from '../Components/Header/Header';
import Home from '../Pages/Home/Home';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='transition-all ' >
           <Header/>
           
           <Outlet/>
        </div>
    );
};

export default Root;