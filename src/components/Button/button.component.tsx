import React from "react";
import Button from '@mui/material/Button'
import "./Button.component.css";


export const ButtonComponent: React.FC<{ text: string, onClick: any }> = ({ text = "button", onClick }) => {
    return (<>
        <Button id="buttonComponent" variant="contained" onClick={onClick}>{text}
            {/* <svg data-testid="DeleteIcon"></svg> */}

        </Button>

    </>
    )
}