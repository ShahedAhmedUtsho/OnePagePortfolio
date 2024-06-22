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
        <div className='grid min-h-96 gap-3 bg-indigo-200   dark:bg-slate-800  grid-cols-12 globalBG my-4  rounded-sm *:rounded-sm p-6 box-border'>
    <div className='border bannarCard   border-black w-full col-span-3 row-span-5 overflow-hidden  '>
        <img src={profile} className='   object-cover  w-full  h-full' alt="" />

    </div>
    <div className='border bannarCard border-black w-full col-span-9  row-span-1'>
    </div>
    <div className='border bannarCard border-black w-full col-span-6   row-span-4'>
    </div>
    <div className='border bannarCard border-black w-full col-span-3 row-span-4'>
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
