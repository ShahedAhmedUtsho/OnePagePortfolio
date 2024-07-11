import React, { useContext, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import {
  Container,
  Grid,
  Box,
  TextField,
  Button,
  Typography,
  useTheme,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';
import { AuthContext } from '../../../Privider/Provider'; // Adjust the path accordingly

const validationSchema = Yup.object().shape({
  from_name: Yup.string().required('Required'),
  from_email: Yup.string().email('Invalid email address').required('Required'),
  message: Yup.string().required('Required'),
});

const ContactMe = () => {
  const { dark } = useContext(AuthContext);
  const theme = useTheme();
  const form = useRef();
  const [open, setOpen] = useState(false); // State to control modal visibility
  const { handleSubmit, control, reset, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    console.log(form.current);

    emailjs.sendForm('Shahed_Ahmed_Utsho_Email', 'template_byq83c6', form.current, {
        publicKey: 'WYhiwqDlnaUlNySxL',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          reset();
          setOpen(true); // Open the modal on success
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const handleClose = () => {
    setOpen(false); // Close the modal
  };

  const buttonBgColor = dark ? '#009688' : '#376da4'; // Default to custom colors
  const buttonHoverColor = dark ? '#00796b' : '#376da474';

  return (
    <Container 
      className='globalBG bannarCard !rounded-sm dark:!bg-slate-800 !bg-indigo-100'
      maxWidth="md"
      sx={{
        mt: 4,
        mb: 4,
        p: 2,
        borderRadius: 2,
        backgroundColor: dark ? 'rgba(58, 58, 58, 0.8)' : 'rgba(255, 255, 255, 0.8)',
        boxShadow: 3,
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                color: dark ? theme.palette.grey[300] : theme.palette.grey[900],
              }}
            >
              <div className="text-2xl md:text-4xl font-semibold leading-tight md:leading-snug tracking-tight md:tracking-normal font-input-sans">Contact Me</div>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: dark ? theme.palette.grey[400] : theme.palette.grey[800],
              }}
            >
              <p className="text-sm -mt-2 md:text-base dark:text-slate-400 cursor-default text-slate-600 font-light leading-relaxed md:leading-loose tracking-normal md:tracking-wide font-plex-sans">
                <span className="font-black text-teal-600 dark:text-teal-300"> thank you for Reach me</span>, If you have any questions or want to work with me, feel free to reach out using the form on the right.
              </p>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            ref={form}
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
          >
            <Controller
              name="from_name"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Name"
                  error={!!errors.name}
                  helperText={errors.name ? errors.name.message : ''}
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
              name="from_email"
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
              name="message"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Message"
                  error={!!errors.message}
                  helperText={errors.message ? errors.message.message : ''}
                  variant="outlined"
                  multiline
                  rows={4}
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
                      outline:dark && 'white'
                    },
                  }}
                />
              )}
            />
            <Button className='col-span-1 dark:text-slate-900 lg:col-start-8 cursor-pointer flex justify-center items-center transition-all duration-75 hover:bg-[#376da474] dark:hover:bg-teal-400 gap-2 w-full h-full !bg-[#376da4] dark:!bg-teal-500 commonBox p-1' color="primary" variant="contained" fullWidth type="submit">
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Dialog className='' open={open} onClose={handleClose}> 
        <div className='bg-indigo-100 dark:bg-slate-800'>

       
        <DialogTitle className='  dark:!text-slate-200 !text-slate-800 font-input-sans'>Success</DialogTitle>
        <DialogContent>
          <DialogContentText className='font-plex-sans dark:!text-slate-400 !text-slate-600'>
            Your message has been successfully sent. Thank you for reaching out!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button className=' uppercase !text-teal-500 !border !border-teal-500' onClick={handleClose} color="primary">Close</Button>
        </DialogActions>
        </div>
      </Dialog>
    </Container>
  );
};

export default ContactMe;
