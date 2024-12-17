import React, { useState } from "react";
import {ButtonComponent} from "../../components/Button/button.component";
// import  AlertComponent  from "../../components/Alert/Alert.component";
import { showAlert } from '../../utils/alertUtils';
import { Alert, AlertTitle, Collapse } from "@mui/material";
import "./HomePage.page.css";

export const Home = () => {

    return (
        <>
        <div id="mainContainer">
        <h1>An effective small business management system</h1>
        <h2>מערכת אפקטיבית לניהול חכם של עסקים קטנים</h2>
            <div id="buttonsContainer">
                <ButtonComponent text="הוסף מערכת לעסק שלך" onClick={() => {
                    showAlert("הודעת מערכת", "המערכת בפיתוח, אנא המתינו...", "info");
                }}>
                </ButtonComponent>
                <ButtonComponent text="הסבר על המערכת" onClick={() => {
                    showAlert("הודעת מערכת", "המערכת בפיתוח, אנא המתינו...", "info");
                }}></ButtonComponent>
            </div>
        </div>

        </>
    );
}
