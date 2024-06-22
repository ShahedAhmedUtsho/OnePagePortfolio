import React, { useContext, useEffect, useState } from 'react';
import ProfileDark from '../../../Assets/Images/normalDark.png' 
import ProfileLight from '../../../Assets/Images/normalLight.png' 
import cercleDark from '../../../Assets/Images/cercleDark.png' 
import cercleLight from '../../../Assets/Images/cercleLight.png' 
import { AuthContext } from '../../../Privider/Provider';
const BannarGrid = () => {
const {dark} = useContext(AuthContext)
const profile = dark? ProfileDark : ProfileLight ; 





    return (
        <div className='grid min-h-96 gap-3 bg-slate-800 *:bg-slate-700 grid-cols-12 globalBG my-4  rounded-sm *:rounded-sm p-6 box-border'>
    <div className='border border-black w-full col-span-3 row-span-5 overflow-hidden  '>
        <img src={profile} className='   object-cover  w-full  h-full' alt="" />

    </div>
    <div className='border border-black w-full col-span-9 row-span-1'>
    </div>
    <div className='border border-black w-full col-span-6 row-span-4'>
    </div>
    <div className='border border-black w-full col-span-3 row-span-4'>
    </div>
  </div>
    );
};

export default BannarGrid;