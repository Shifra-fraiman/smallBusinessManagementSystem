import React, {useState} from "react";
import {
    Button,
    createTheme,
    Divider,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
    ThemeProvider,
} from "@mui/material";
import {CacheProvider, Theme} from "@emotion/react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import {prefixer} from "stylis";
import './BussinesForm.css'

export const BussinessForm = ({onNext}) => {
    // id: string, name: string, address: string, admin:User

    const theme = (outerTheme: Theme) =>
        createTheme({
            direction: "rtl",
        });

    const cacheRtl = createCache({
        key: "muirtl",
        stylisPlugins: [prefixer, rtlPlugin],
    });

    const submitUserForm = (event) => {
        event.preventDefault();
        console.log("submitUserForm");

        onNext();
    };

    return (
        <>
            <CacheProvider value={cacheRtl}>
                <ThemeProvider theme={theme}>
                    <form className="form" dir="rtl">
                        <div>
                            <FormControl
                                sx={{m: 1, mb: 2, width: "50ch", textAlign: "right", dir: "rtl"}}
                                variant="outlined"
                                margin="normal"
                                fullWidth
                            >
                                <InputLabel htmlFor="name">שם העסק</InputLabel>
                                <OutlinedInput id="name" label="שם העסק" />
                            </FormControl>
                        </div>

                        <FormControl
                            sx={{m: 1, mb: 2, width: "50ch", textAlign: "right"}}
                            variant="outlined"
                            margin="normal"
                            fullWidth
                        >
                            <InputLabel htmlFor="address">כתובת</InputLabel>
                            <OutlinedInput id="address" label="כתובת" type="address" />
                        </FormControl>

                        <Button
                            sx={{m: 1, mb: 2, width: "25ch", background: "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)"}}
                            variant="contained"
                            color="primary"
                            type="submit"
                            className="button"
                            id="buttonForm"
                            name="button"
                            onClick={submitUserForm}
                        >
                            אשר
                        </Button>
                    </form>
                </ThemeProvider>
            </CacheProvider>
        </>
    );
};
