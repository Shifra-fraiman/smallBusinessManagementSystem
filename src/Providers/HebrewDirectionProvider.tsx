import {CacheProvider, Theme} from "@emotion/react";
import {createTheme, ThemeProvider} from "@mui/material";
import React from "react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import {prefixer} from "stylis";

export const HebrewDirectionProvider = ({children}) => {
    //צד ימין לשמאל
    const theme = (outerTheme: Theme) =>
        createTheme({
            direction: "rtl",
        });
    //סוג העיצוב של MUI RTL
    const cacheRtl = createCache({
        key: "muirtl",
        stylisPlugins: [prefixer, rtlPlugin],
    });
    return (
        <>
            <CacheProvider value={cacheRtl}>
                <ThemeProvider theme={theme}>{children}</ThemeProvider>
            </CacheProvider>
        </>
    );
};
