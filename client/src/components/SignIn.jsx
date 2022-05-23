
import React from 'react';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

// MUI PAGE THEME
const theme = createTheme({
    palette: {
        primary: {
            light: '#6d6d6d',
            main: '#424242',
            dark: '#1b1b1b',
            contrastText: '#ffffff',
        },
        secondary: {
            light: '#9cff57',
            main: '#64dd17',
            dark: '#1faa00',
            contrastText: '#000000',
        },
    },
});

// MUI GRID STYLING
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
}));


const SignIn = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{
                '& > :not(style)': {
                    mt: 2,
                },
            }}>
                <Grid container spacing={2}>
                    <Grid item xs={5}>
                        <Item sx={{ backgroundColor: 'primary.dark', padding: 3 }}>

                        </Item>
                    </Grid>
                    <Grid item xs={7}>
                        <Item sx={{ backgroundColor: 'primary.dark', padding: 3 }}>
                            <Typography
                                component="p"
                                variant="p"
                                sx={{ color: "primary.contrastText" }}>
                                <div className="row">
                                    <div className="col">
                                            <Typography sx={{ color: "primary.contrastText", mb: 1.5 }} variant="h5" className='d-flex justify-content-center'>Register</Typography>
                                        <RegistrationForm></RegistrationForm>
                                    </div>
                                    <div className="col">
                                        <Typography sx={{ color: "primary.contrastText", mb: 1.5 }} variant="h5" className='d-flex justify-content-center'>Login</Typography>
                                        <LoginForm></LoginForm>
                                    </div>
                                </div>
                            </Typography>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
};


export default SignIn;