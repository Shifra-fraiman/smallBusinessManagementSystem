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
import FormHelperText from '@mui/material/FormHelperText';
import "./UserForm.css";
import { GenericForm } from "../genericForm/GenericForm";

export const UserForm = ({onNext}) => {
//     const [showPassword, setShowPassword] = React.useState(false);
   
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: ''
//     });
//     const [errors, setErrors] = useState({
//         name: '',
//         email: '',
//         password: ''
//     });

//     const handleChange = (event) => {
//         event.preventDefault();
//         const { name, value } = event.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//         setErrors({
//             ...errors,
//             [name]: ''
//         });
       
//     };

//     const handleClickShowPassword = () => setShowPassword((show) => !show);

//     //למנוע את המסגרת סביב אייקון העין
//     const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
//         event.preventDefault();
//     };
//     // const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
//     //     event.preventDefault();
//     // };
//     const validateForm = () => {
//         let valid = true;
//         let newErrors = { name: '', email: '', password: '' };

//         if (formData.name.trim() === '') {
//             newErrors.name = 'שדה זה הינו חובה';
//             valid = false;
//         }
//         if (formData.email.trim() === '') {
//             newErrors.email = 'שדה זה הינו חובה';
//             valid = false;
//         } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//             newErrors.email = 'מייל לא תקין';
//             valid = false;
//         }
//         if (formData.password.trim() === '') {
//             newErrors.password = 'שדה זה הינו חובה';
//             valid = false;
//         }

//         setErrors(newErrors);
//         return valid;
//     };

//     const submitUserForm = (event) => {
//         event.preventDefault();
//         if(validateForm()){
//             alert(`${formData.password},${formData.email}, ${formData.name}`);
//             //שליחה לסרוויס 
//             onNext();
//         }
      
//     };
    const fields = [
        { name: 'name', label: 'שם', validation: 'text', type: 'text' },
        { name: 'email', label: 'מייל', validation: 'email', type: 'text' },
        { name: 'password', label: 'סיסמה', validation: 'password', type: 'password' },
    ];

    const handleFormSubmit = (data) => {
        alert(`נתונים: ${JSON.stringify(data)}`);
        onNext();
    };

    return ( 
              <GenericForm fields={fields} onSubmit={handleFormSubmit} />
        
//         <form className="form" dir="rtl" onSubmit={submitUserForm}>
//             <FormControl
//                 sx={{m: 1, mb: 2, width: "50ch", textAlign: "right", dir: "rtl"}}
//                 variant="outlined"
//                 margin="normal"
//                 fullWidth
                
//             >
//                 <InputLabel htmlFor="name">שם</InputLabel>
//                 <OutlinedInput id="name" label="שם" name="name" onChange={handleChange} error={!!errors.name}/>
//                 {errors.name && <FormHelperText error>{errors.name}</FormHelperText>}

//             </FormControl>
//             <FormControl
//                 sx={{m: 1, mb: 2, width: "50ch", textAlign: "right"}}
//                 variant="outlined"
//                 margin="normal"
//                 fullWidth
//             >
//                 <InputLabel htmlFor="email" >מייל</InputLabel>
//                 <OutlinedInput id="email" label="מייל" type="text" name="email" onChange={handleChange} error={!!errors.email}/>
//                 {errors.email && <FormHelperText error>{errors.email}</FormHelperText>}

//             </FormControl>
//             <FormControl sx={{m: 1, mb: 2, width: "50ch"}} variant="outlined" margin="normal" fullWidth>
//                 <InputLabel htmlFor="password">סיסמה</InputLabel>
//                 <OutlinedInput
//                     id="outlined-adornment-password"
//                     type={showPassword ? "text" : "password"}
//                     onChange={handleChange}
//                     name="password"
//                     error={!!errors.password}
//                     endAdornment={
//                         <InputAdornment position="end"  >
//                             <IconButton
//                                 aria-label={showPassword ? "hide the password" : "display the password"}
//                                 onClick={handleClickShowPassword}
//                                 onMouseDown={handleMouseDownPassword}
//                                 // onMouseUp={handleMouseUpPassword}
//                                 edge="end"          
//                             >
//                                 {showPassword ? <VisibilityOff /> : <Visibility />}
//                             </IconButton>
//                         </InputAdornment>
//                     }
//                     label="Password"
//                 />
//                    {errors.password && <FormHelperText error>{errors.password}</FormHelperText>}
//             </FormControl>
//             <Button
//                 sx={{m: 1, mb: 2, width: "25ch", color: "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)", background: "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)"}}
//                 variant="contained"
//                 color="primary"
//                 type="submit"
//                 className="button"
//                 onSubmit={submitUserForm}
//             >
//                 אשר
//             </Button>
//         </form>
    );
};
