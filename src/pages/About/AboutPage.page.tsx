import React, {useState} from "react";
import { Container, Typography, Box } from '@mui/material';

export const AboutPage = () => {
    return (
        <>
        <Container maxWidth="md">
            <Box sx={{ textAlign: 'center', marginTop: 4 }}>
                <Typography variant="h4" gutterBottom>
                    אודות
                </Typography>
                <Typography variant="body1" paragraph>
                    ברוכים הבאים לאתר לניהול עסקים קטנים. כאן תוכלו למצוא את כל הכלים 
                    והמשאבים הנדרשים כדי לנהל את העסק שלכם ביעילות ובקלות.
                </Typography>
                <Typography variant="body1">
                    אנו מציעים מגוון שירותים שיסייעו לכם לנהל את העסק שלכם בצורה מיטבית.
                </Typography>
            </Box>
        </Container>
        </>
    );
};

