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
  Link,
  useTheme
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { AuthContext } from '../../Privider/Provider'; // Adjust the path accordingly

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required'),
});

const Login = () => {
  const { dark } = useContext(AuthContext);
  const theme = useTheme();

  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const buttonBgColor = dark ? '#009688' : '#376da4';
  const buttonHoverColor = dark ? '#00796b' : '#376da474';

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
        <div className="text-2xl md:text-4xl cursor-default font-semibold leading-tight flex md:leading-snug tracking-tight md:tracking-normal font-input-sans dark:text-slate-200 text-slate-800 relative">
      
         Login</div>
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="Email"
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ''}
                variant="outlined"
                InputLabelProps={{
                  style: {
                    color: dark ? 'white' : 'black',
                  },
                }}
                InputProps={{
                  sx: {
                    color: dark ? 'white' : 'black',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: buttonBgColor,
                      },
                      '&:hover fieldset': {
                        borderColor: buttonHoverColor,
                      },
                    },
                  },
                }}
                FormHelperTextProps={{
                  style: {
                    color: dark ? 'white' : 'black',
                  },
                }}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="Password"
                type="password"
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : ''}
                variant="outlined"
                InputLabelProps={{
                  style: {
                    color: dark ? 'white' : 'black',
                  },
                }}
                InputProps={{
                  sx: {
                    color: dark ? 'white' : 'black',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: buttonBgColor,
                      },
                      '&:hover fieldset': {
                        borderColor: buttonHoverColor,
                      },
                    },
                  },
                }}
                FormHelperTextProps={{
                  style: {
                    color: dark ? 'white' : 'black',
                  },
                }}
              />
            )}
          />
          <Button className='dark:text-slate-900 cursor-pointer flex justify-center items-center transition-all duration-75 hover:bg-[#376da474] dark:hover:bg-teal-400 gap-2 w-full h-full !bg-[#376da4] dark:!bg-teal-500 commonBox p-1' color="primary" variant="contained" fullWidth type="submit">
            Login
          </Button>
        </Box>
        <Box mt={2}>
          <Typography>
            Don't have an account? <Link component={RouterLink} to="/register">Register</Link>
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default Login;
