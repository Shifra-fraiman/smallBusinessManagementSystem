import React, {useState} from "react";
// import { useForm } from "react-hook-form";
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
import {Password, Visibility} from "@mui/icons-material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";


export const UserForm = ({onNext}) => {
    const [showPassword, setShowPassword] = React.useState(false);
   
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        Password: ''
    });

    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
       
    };

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    //למנוע את המסגרת סביב אייקון העין
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    // const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    //     event.preventDefault();
    // };

    const submitUserForm = (event) => {
        event.preventDefault();
        alert(`${formData.Password},${formData.email}, ${formData.name}`);
        //שליחה לסרוויס 
        onNext();
    };

    return ( 
        <form className="form" dir="rtl" onSubmit={submitUserForm}>
            <FormControl
                sx={{m: 1, mb: 2, width: "50ch", textAlign: "right", dir: "rtl"}}
                variant="outlined"
                margin="normal"
                fullWidth
            >
                <InputLabel htmlFor="name">שם</InputLabel>
                <OutlinedInput id="name" label="שם" name="name" onChange={handleChange}/>
            </FormControl>
            <FormControl
                sx={{m: 1, mb: 2, width: "50ch", textAlign: "right"}}
                variant="outlined"
                margin="normal"
                fullWidth
            >
                <InputLabel htmlFor="email" >מייל</InputLabel>
                <OutlinedInput id="email" label="מייל" type="email" name="email" onChange={handleChange} />
            </FormControl>
            <FormControl sx={{m: 1, mb: 2, width: "50ch"}} variant="outlined" margin="normal" fullWidth>
                <InputLabel htmlFor="password">סיסמה</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    onChange={handleChange}
                    name="password"
                    endAdornment={
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
                    }
                    label="Password"
                />
            </FormControl>
            <Button
                sx={{m: 1, mb: 2, width: "25ch", color: "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)", background: "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)"}}
                variant="contained"
                color="primary"
                type="submit"
                className="button"
                onSubmit={submitUserForm}
            >
                אשר
            </Button>
        </form>
    );
};
