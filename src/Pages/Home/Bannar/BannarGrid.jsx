import React, { useContext, useEffect, useState } from 'react';
import ProfileDark from '../../../Assets/Images/normalDark.png' 
import ProfileLight from '../../../Assets/Images/normalLight.png' 
import cercleDark from '../../../Assets/Images/cercleDark.png' 
import cercleLight from '../../../Assets/Images/cercleLight.png' 
import { AuthContext } from '../../../Privider/Provider';
const BannarGrid = () => {
const {dark} = useContext(AuthContext)
const profile = dark? cercleDark : cercleDark ; 





    return (
       <div className='my-4 p-[0.5px] rounded-sm   bg-gradient-to-tr dark:from-slate-600 dark:to-teal-600   '>
         <div className='grid lg:max-h-96 max-h-[400px]        gap-3 bg-indigo-200  dark:bg-slate-800  lg:grid-rows-3 md:grid-rows-4 md:grid-cols-4    lg:grid-cols-12 globalBG   rounded-sm *:rounded-sm lg:p-6 md:p-4 p-2 box-border'>
    <div className='border bannarCard   md:row-span-2 md:order-1 order-3  border-black w-full   lg:col-span-3 lg:row-span-5 col-span-1 overflow-hidden  '>
        <img src={profile} className='    object-cover  w-full  h-full' alt="" />

    </div>
    <div className='border bannarCard  border-black w-full md:col-span-3 md:row-span-2 lg:order-2 md:order-3 lg:col-span-9  order-1   lg:row-span-1'>
    </div>
    <div className='border bannarCard  border-black w-full md:row-span-2 lg:order-3 md:order-2 md:col-span-3    lg:col-span-6 order-3   lg:row-span-4'>
    </div>
    <div className='border bannarCard  border-black w-full md:row-span-2  lg:order-4 md:order-4 md:col-span-1 lg:col-span-3 order-4  lg:row-span-4'>
    </div>
  </div>
       </div>
    );
};

export default BannarGrid;







// import React, { useContext } from 'react';
// import ProfileDark from '../../../Assets/Images/normalDark.png';
// import ProfileLight from '../../../Assets/Images/normalLight.png';
// import { AuthContext } from '../../../Privider/Provider';

// const BannarGrid = () => {
//     const { dark } = useContext(AuthContext);
//     const profile = dark ? ProfileDark : ProfileLight;

//     return (
//         <div className={`grid min-h-96 gap-3 ${dark ? 'bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600' : 'bg-gradient-to-r from-indigo-200 via-indigo-100 to-white'} grid-cols-12 globalBG my-4 rounded-sm p-6 box-border`}>
//             <div className='border border-black w-full col-span-3 row-span-5 overflow-hidden'>
//                 <img src={profile} className='object-cover w-full h-full' alt="" />
//             </div>
//             <div className='border border-black w-full col-span-9 row-span-1'></div>
//             <div className='border border-black w-full col-span-6 row-span-4'></div>
//             <div className='border border-black w-full col-span-3 row-span-4'></div>
//         </div>
//     );
// };

// export default BannarGrid;
