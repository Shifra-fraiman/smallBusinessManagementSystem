import React, {useState} from "react";
import {styled} from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import StepConnector, {stepConnectorClasses} from "@mui/material/StepConnector";
import {StepIconProps} from "@mui/material/StepIcon";
import {Button} from "@mui/material";
import ViewListIcon from '@mui/icons-material/ViewList';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import NotStartedIcon from '@mui/icons-material/NotStarted';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import BusinessIcon from '@mui/icons-material/Business';
import PersonIcon from '@mui/icons-material/Person';

//עיצוב הקווים המוברים בין האייקונים
const ColorlibConnector = styled(StepConnector)(({theme}) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage: "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage: "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 3,
        border: 0,
        backgroundColor: "#eaeaf0",
        borderRadius: 1,
        ...theme.applyStyles("dark", {
            backgroundColor: theme.palette.grey[800],
        }),
    },
}));

const ColorlibStepIconRoot = styled("div")<{
    ownerState: {completed?: boolean; active?: boolean};
}>(({theme}) => ({
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    ...theme.applyStyles("dark", {
        backgroundColor: theme.palette.grey[700],
    }),
    variants: [
        {
            props: ({ownerState}) => ownerState.active,
            style: {
                backgroundImage:
                    "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
                boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
            },
        },
        {
            props: ({ownerState}) => ownerState.completed,
            style: {
                backgroundImage:
                    "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
            },
        },
    ],
}));

function ColorlibStepIcon(props: StepIconProps) {
    const {active, completed, className} = props;

    const icons: {[index: string]: React.ReactElement<unknown>} = {
        1: <PersonIcon />,
        2: <BusinessCenterIcon />,
        3: <SettingsIcon />,
    };

    return (
        <ColorlibStepIconRoot ownerState={{completed, active}} className={className}>
            {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
    );
}

const steps = ["פרטיך- בעל העסק", "פרטי העסק שלך", "השירות שהעסק שלך נותן"];

export const CreateStepper = (prop) => {
    const {value} = prop;
    const [activeStep, setActiveStep] = useState(value);

    // const handleNext = () => {
    //   setActiveStep((prevActiveStep) => Math.min(prevActiveStep + 1, steps.length - 1));
    // };

    return (
        <div className="stepper" dir="rtl">
            <Stack sx={{width: "150%", m: "0px"}} spacing={4}>
                <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Stack>
        </div>
    );
};
