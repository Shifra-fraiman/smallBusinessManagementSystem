import React, {useState} from "react";
import { Button, createTheme, Divider, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, ThemeProvider } from "@mui/material";
import {Visibility} from '@mui/icons-material';
import { CacheProvider, Theme } from "@emotion/react";
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import "../UserForm/UserForm.css";


export const ServiceForm = ({onNext})=>{

    const theme = (outerTheme: Theme) =>
        createTheme({
          direction: 'rtl',
        //   palette: {
        //     mode: outerTheme.palette.mode,
        //   },
        });
      
      const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
      });
    
    // name: string, 
    // phone: string,
    // password: string
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const submitUserForm=(event)=>{
        event.preventDefault();
        console.log("submitUserForm");
        
        onNext();
    }
 //   id: string, businessId:Bussiness,name: string, serviceData: { schedule: string, description:[{title, content},{}]}

    return (
        <>
        <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
        <form className="form" dir="rtl">
    <div >
      <FormControl  sx={{ m: 1,mb: 2, width: '50ch', textAlign: 'right', dir:"rtl" }} variant="outlined" margin="normal" fullWidth>
        <InputLabel htmlFor="name">שם</InputLabel>
        <OutlinedInput id="name" label="שם" />
      </FormControl>
      </div>

      <FormControl sx={{ m: 1,mb: 2, width: '50ch', textAlign: 'right' }}variant="outlined" margin="normal" fullWidth>
        <InputLabel htmlFor="description">תיאור</InputLabel>
        <OutlinedInput id="description" label="תיאור" type="תיאור" />
      </FormControl>
     
      <Button sx={{ m: 1,mb: 2, width: '25ch', background: "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)" }} variant="contained" color="primary" type="submit" onClick={submitUserForm} className="button">אשר</Button>
    </form>
    </ThemeProvider>
    </CacheProvider>
    </>
    )
}