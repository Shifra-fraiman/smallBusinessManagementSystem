import React, { useState } from "react";
import { UserForm } from "../../components/Forms/UserForm/UserForm.component";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import "./CreateBussinessPage.scss";
import { CreateStepper } from "../../components/general/CreateStepper";
import { BussinessForm } from "../../components/Forms/BusinessForm/BussinesForm";
import { ServiceForm } from "../../components/Forms/ServiceForm/ServiceForm";
import { ChooseDayInWeekAndTime } from "../../components/general/ChooseDayInWeekAndTime";
import { GenericForm } from "../../components/Forms/genericForm/GenericForm";




export const CreateBussinessPage = ()=>{
    // function valuetext(value: number) {
    //     return `${value}°C`;
    //   }

const [currentForm, setCurrentForm]= useState(0);

    const NextForm=()=>{
        console.log("NextFunc");
        
        setCurrentForm(currentForm+1);
    }


    return (
        <>
        {/* <div className="slider">
        <Box sx={{ width: 500 }}>
          <Slider 
  aria-label="Temperature"
  defaultValue={40}
  getAriaValueText={valuetext}
  color="secondary"
  
/>
    </Box>
            
        </div> */}
        <CreateStepper key = {currentForm} value={currentForm}></CreateStepper>  
           
        {currentForm === 0 && <UserForm onNext={NextForm} />}
        {currentForm === 1 && <BussinessForm onNext={NextForm} />}
        {currentForm === 2 && <ServiceForm onNext={NextForm} />}

        </>
    )
}