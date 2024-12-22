import React, { useEffect, useState } from "react";
import {
    Button,
    FormControl,
    InputLabel,
    OutlinedInput,
    FormHelperText,
    InputAdornment,
    IconButton,
} from "@mui/material";
import './GenericForm.css'
import { Visibility, VisibilityOff } from "@mui/icons-material";

const validationRules = {
    text: (value) => value.trim().length >= 2 || 'שדה זה הינו חובה',
    email: (value) => /\S+@\S+\.\S+/.test(value) || 'מייל לא תקין',
    password: (value) => (value.length >= 6 && /[A-Z]/.test(value) && /[0-9]/.test(value)) || 'סיסמה חייבת להיות לפחות 6 תווים, עם אות גדולה ומספר',
};

export const GenericForm = ({fields, onSubmit, canSkipped}: { fields: any; onSubmit: any; canSkipped?: boolean }) => {
    
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);


    useEffect(()=>{
        for (const field of fields) {
            const { name } = field;
            setFormData({
                ...formData,
                name: ''
            })
            setErrors({
                ...errors,
                name: ''
            })
        }
    },[])

    //לסיסמה
    const handleClickShowPassword = () => setShowPassword((show) => !show); 
      
    //למנוע את המסגרת סביב אייקון העין
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    // const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    //     event.preventDefault();
    // };


    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log("hello");
        
        setFormData({
            ...formData,
            [name]: value
        });
        console.log(`formData[name]: ${formData[name]}, name: ${name}`);
        
        setErrors({
            ...errors,
            [name]: ''
        });
    };

    const validateForm = () => {
        let valid = true;
        let newErrors = {};
    
        for (const field of fields) {
            const {name, validation } = field; // כאן אנו מקבלים את השדות מהאובייקט Field
            const value = formData[name] || '';
            const validationResult = validationRules[validation](value);
            if (validationResult !== true) {
                newErrors[name] = validationResult; // משתמשים בשם כדי לשמור את השגיאה
                valid = false;
            }
        }
    
        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            onSubmit(formData);
        }
    };
    const handleSkip=(event)=>{
        event.preventDefault();
        //לדף הבא- מהו?
        //לקבל גם כפרמטר
    }

    return (
        <>
        <form onSubmit={handleSubmit} dir="rtl">
            {fields.map(({ name, label, type }) => (
            <FormControl 
                key={name} 
                variant="outlined" 
                margin="normal" 
                fullWidth
                sx={{ m: 1, mb: 2, width: "50ch", textAlign: "right", dir: "rtl" }}
            >
                <InputLabel htmlFor={name}>{label}</InputLabel>
                <OutlinedInput
                    id={name}
                    label={name}
                    name={name}
                    type={type === 'password' && !showPassword ? 'password' : 'text'}
                    onChange={handleChange}
                    error={!!errors[name]}
                    endAdornment={type === "password" && (
                                                <InputAdornment position="end"  >
                                                    <IconButton
                                                        aria-label={showPassword ? "hide the password" : "display the password"}
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        // onMouseUp={handleMouseUpPassword}
                                                        edge="end"          
                                                    >
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                )}
                />
                {errors[name] && <FormHelperText error>{errors[name]}</FormHelperText>}
            </FormControl>
            ))}
            <br></br>
            <Button 
                sx={{ m: 1, mb: 2, width: "25ch", color: "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)", background: "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)" }} 
                variant="contained" 
                color="primary" 
                type="submit"
            >
                אשר
            </Button>
            
        </form>
        {canSkipped && <Button 
            sx={{ m: 1, mb: 2, width: "25ch", color: "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)", background: "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)" }} 
            variant="contained" 
            color="primary" 
            type="submit"
            onClick={handleSkip}
        >
            דלג
        </Button>}
        </>
    );
};

