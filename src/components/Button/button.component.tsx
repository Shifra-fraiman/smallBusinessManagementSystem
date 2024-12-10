import React from "react";
import Button from '@mui/material/Button'


export const ButtonComponent:React.FC<{text:string, onClick:any}>  = ({text="button", onClick}) => {
    return (
        <Button id="buttonComponent" variant="contained" onClick={onClick}>{text}</Button>
    )
}