import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const ContactPage: React.FC = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // כאן תוכל להוסיף לוגיקה לשליחת הטופס
    };

    return (
        <Container maxWidth="md">
            <Box sx={{ textAlign: 'center', marginTop: 4 }}>
                <Typography variant="h4" gutterBottom>
                    צור קשר
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="שם"
                        variant="outlined"
                        margin="normal"
                        required
                    />
                    <TextField
                        fullWidth
                        label="אימייל"
                        variant="outlined"
                        margin="normal"
                        required
                    />
                    <TextField
                        fullWidth
                        label="הודעה"
                        variant="outlined"
                        margin="normal"
                        multiline
                        rows={4}
                        required
                    />
                    <Button type="submit" variant="contained" color="primary">
                        שלח
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default ContactPage;
