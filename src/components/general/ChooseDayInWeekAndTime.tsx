import React from "react";
import {
    Button,
    createTheme,
    Divider,
    FormControl,
    FormControlLabel,
    FormLabel,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Radio,
    RadioGroup,
    TextField,
    ThemeProvider,
} from "@mui/material";

export const ChooseDayInWeekAndTime = () => {
    const [value, setValue] = React.useState("female");
    const days=['ראשון', 'שני','שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'];

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };
    return (
        <>
        <h1>בחר את השעות בהם אתה מעוניין לתת שירות- בהן יקבעו פגישות- תורים עבורך</h1>
            <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
                {/* <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                >
                    {days.map(day=> <FormControlLabel value={day} control={<Radio />} label={day} />)}
                </RadioGroup> */}
                {days.map(day=> <FormControlLabel value={day} control={<Radio />} label={day} />)}
            </FormControl>
        </>
    );
};
