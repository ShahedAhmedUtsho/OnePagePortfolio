import React, { useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  
  useTheme
} from '@mui/material';
import { Link, Link as RouterLink } from 'react-router-dom';
import { AuthContext } from '../../Privider/Provider'; 


const Notfound = () => {
  const { dark } = useContext(AuthContext);


  

 



  return (
    <div className='dark:bg-slate-900 bg-indigo-100 min-h-screen globalBG border-collapse pt-[20vh]'>
      <Container
         className='!rounded-sm dark:!bg-slate-700 !bg-indigo-100'
        maxWidth="sm"
        sx={{
          mt: 4,
          mb: 4,
          p: 2,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: dark ? 'rgba(58, 58, 58, 0.8)' : 'rgba(255, 255, 255, 0.8)',
        }}
      >
        <Typography variant="h4" gutterBottom>
        <div className="text-2xl md:text-4xl cursor-default font-semibold leading-tight flex md:leading-snug tracking-tight md:tracking-normal mb-10 font-input-sans dark:text-slate-200 text-slate-800 relative">
      
         Page not found</div>
        </Typography>
      
             
        
         
          <Link to="/" aria-label='back to home'  className='dark:text-slate-900 cursor-pointer flex justify-center items-center transition-all duration-75 hover:bg-[#376da474] dark:hover:bg-teal-400 gap-2 w-full h-full !bg-[#376da4] dark:!bg-teal-500 commonBox p-1' color="primary" >
            Back to home
          </Link>
        
        
      </Container>
    </div>
  );
};



export default Notfound;