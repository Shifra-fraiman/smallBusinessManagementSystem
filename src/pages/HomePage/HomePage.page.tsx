import React, { useState } from "react";
import { ButtonComponent } from "../../components/Button/Button.component";
// import  AlertComponent  from "../../components/Alert/Alert.component";
import { showAlert } from '../../utils/alertUtils';
import { Alert, AlertTitle, Collapse } from "@mui/material";
import "./HomePage.page.css";

export const Home = () => {

    return (
        <>
            <h1>An effective small business management system</h1>
            <div id="buttonsContainer">
                <ButtonComponent text="הוסף מערכת לעסק שלך" onClick={() => {
                    showAlert("הודעת מערכת", "המערכת בפיתוח, אנא המתינו...", "info");
                }}>
                </ButtonComponent>
                <ButtonComponent text="הסבר על המערכת" onClick={() => {
                    showAlert("הודעת מערכת", "המערכת בפיתוח, אנא המתינו...", "info");
                }}></ButtonComponent>
            </div>
        </>
    );
}
