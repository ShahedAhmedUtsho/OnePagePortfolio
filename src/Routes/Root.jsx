
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import OnHeader from '../Components/OnHeader/OnHeader';






const Root = () => {
    const location = useLocation()
    const [isTest,setIsTest] = useState(false) ;
    useEffect(() => {
     if(location.pathname === "/test"){
        setIsTest(true)
        console.log("yes")
     }else{
        setIsTest(false) ;
        console.log("no")
     }
    
      return () => {
        
      }
    },[isTest,location.pathname])
    





    return (
        <div className=' transition-all  ' >
          {!isTest && <OnHeader></OnHeader> }
           {}
           <Outlet/>
        </div>
    );
};

export default Root;