
import React, { useState } from 'react';
import axios from 'axios';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button } from '@mui/material';
import { useHistory } from "react-router-dom";

const RegistrationForm = () => {

    //form info stored in state variables 
    let [userName, setUserName] = useState("");
    let [email, setEmail] = useState("");
    let [apiKey, setApiKey] = useState("");
    let [confirmKey, setConfirmKey] = useState("");
    let [password, setPassword] = useState("");
    let [confirmPass, setConfirmPass] = useState("");

    let [formErrors, setFormErrors] = useState({})

    const history = useHistory();


    const register = (e) => {
        e.preventDefault();
        //objectify the info 
        let formInfo = { userName, email, apiKey, confirmKey, password, confirmPass };
        axios.post("http://localhost:8000/api/users/register", formInfo, { withCredentials: true })
            .then(res => {
                console.log("res after registering", res)
                if (res.data.errors) {
                    setFormErrors(res.data.errors)
                } else {
                    //redirect to dashboard
                    history.push("/dashboard")

                }
            })
            .catch(err => {
                console.log("err after register", err)
            })
    }

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


    return (
        <ThemeProvider theme={theme}>
            <form onSubmit={register}>
                <div className="form-group">
                    <label >User Name</label>
                    <input type="text" name="userName" id="" className='form-control' onChange={(e) => setUserName(e.target.value)} />
                    <p className="text-danger">{formErrors.userName?.message}</p>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" name="email" id="" className='form-control' onChange={(e) => setEmail(e.target.value)} />
                    <p className="text-danger">{formErrors.email?.message}</p>

                </div>
                <div className="form-group">
                    <label>API Key</label>
                    <input type="password" name="apiKey" id="" className='form-control' onChange={(e) => setApiKey(e.target.value)} />
                    <p className="text-danger">{formErrors.apiKey?.message}</p>

                </div>
                <div className="form-group">
                    <label>Confirm API Key</label>
                    <input type="password" name="confirmKey" id="" className='form-control' onChange={(e) => setConfirmKey(e.target.value)} />
                    <p className="text-danger">{formErrors.confirmKey?.message}</p>

                </div>
                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" id="" className='form-control' onChange={(e) => setPassword(e.target.value)} />
                    <p className="text-danger">{formErrors.password?.message}</p>

                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" name="confirmPass" id="" className='form-control' onChange={(e) => setConfirmPass(e.target.value)} />
                    <p className="text-danger">{formErrors.confirmPass?.message}</p>

                </div>
                <Button type="submit"  sx={{ color: 'secondary.main' }}>register</Button>
            </form>
        </ThemeProvider>
    );
};


export default RegistrationForm;