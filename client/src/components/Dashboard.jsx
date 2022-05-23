
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Tab from './Tab';
import Achievements from './Achievements';
import Friends from './Friends';
import Clips from './Clips';
import axios from 'axios'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';

const Dashboard = () => {
    let [profileInfo, setProfileInfo] = useState([])
    let [activityInfo, setActivityInfo] = useState([])

    const history = useHistory();

    const tabs = [
        { title: "Achievements", view: "Achievements" },
        { title: "Friends", view: "Friends" },
        { title: "GameClips", view: "GameClips" },
    ];
    const [tabsList, setTabsList] = useState(tabs);
    const [currentTab, setCurrentTab] = useState(0);

    useEffect(() => {
        console.log("inside use effect")
        axios.get(`http://localhost:8000/api/profile`)
            .then(res => {
                console.log("getting all account info -->", res)
                setProfileInfo(res.data.results.profileUsers[0].settings)
            })
            .catch(err => console.log("Error", err))
    }, [])

    useEffect(() => {
        console.log("inside use effect")
        axios.get(`http://localhost:8000/api/activity/feed`)
            .then(res => {
                console.log("getting all activity info -->", res)
                setActivityInfo(res.data.results.activityItems)
            })
            .catch(err => console.log("Error", err))
    }, []);

    // LOGOUT
    const logout = ()=>{
        axios.get("http://localhost:8000/api/users/logout", {withCredentials:true})
            .then(res=>{
                history.push("/")
            })
            .catch(err=>{
                console.log("errrr logging out", err)
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

    // MUI GRID STYLING
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{
                '& > :not(style)': {
                    mt: 2,
                },
            }}>
                <Grid container spacing={2}>
                    <Grid item xs={5}>

                        {/* left column */}
                        <Item sx={{ backgroundColor: 'primary.dark' }}>

                            {/* left column header */}
                            <Toolbar
                                component="nav"
                                variant="dense"
                                sx={{ overflowX: 'auto', borderBottom: 1, borderColor: 'primary.light', display: 'flex', justifyContent: 'space-between' }}
                            >
                                <Typography
                                    component="p"
                                    variant="p"
                                    sx={{ color: "primary.contrastText" }}
                                >
                                    <img className='profileThumbNail me-2' src={profileInfo[0]?.value} alt="" />
                                    {profileInfo[2]?.value} - {profileInfo[3]?.value}
                                </Typography>
                                <Typography>
                                    <Button onClick = {logout} href="" sx={{ color: 'secondary.main' }}>logout</Button>
                                </Typography>
                            </Toolbar>

                            {/* left column body */}
                            <Container sx={{ mt: 3 }}>
                                <Typography
                                    component="h5"
                                    variant="h4"
                                    sx={{ display: 'flex', justifyContent: 'flex-start', color: "primary.contrastText" }}
                                >
                                    {profileInfo[2]?.value}
                                </Typography>
                                <Typography
                                    component="p"
                                    variant="p"
                                    sx={{ display: 'flex', justifyContent: 'flex-start', mt: .5, color: "primary.contrastText" }}
                                >
                                    {profileInfo[6]?.value}
                                </Typography>
                                <Typography>
                                    <img className='profilePicture me-2' src={profileInfo[0]?.value} alt="" />
                                </Typography>
                                <Typography
                                    component="p"
                                    variant="p"
                                    sx={{ mt: 1, display: 'flex', justifyContent: 'flex-start', color: "primary.contrastText" }}
                                >
                                    {profileInfo[1]?.value} <div className='profileGamerScoreG ms-1'>G</div>
                                </Typography>
                                <Typography
                                    component="div"
                                    variant="div"
                                    sx={{ mt: 5, mb: 3, display: 'flex', color: "primary.contrastText", justifyContent: 'space-between' }}>
                                    <p>Bio: {profileInfo[7]?.value}</p>
                                    <p>Location: {profileInfo[8]?.value}</p>
                                </Typography>

                            </Container>
                        </Item>

                        {/* ACTIVITY FEED */}
                        <Item sx={{ backgroundColor: 'primary.dark', mt: 2 }}>
                            <Typography
                                component="p"
                                variant="h5"
                                sx={{ mt: 2, ml: 3, mr:2, display: 'flex', justifyContent: 'flex-start', color: "primary.contrastText", borderBottom: 1, borderColor: 'primary.light' }}
                            >
                                Recent News
                            </Typography>
                            <Container sx={{
                                mt: 1.5, position: 'relative',
                                overflow: 'auto',
                                maxHeight: 645
                            }}>
                                {
                                    activityInfo.map((act, i) => {
                                        if (activityInfo[i].ugcCaption && activityInfo[i].itemImage != ""){
                                            return (
                                                <List sx={{ width: '100%', color: 'white' }}>
                                                    <ListItem alignItems="flex-start">
                                                        <Typography sx={{ mt: 1.5 }}>
                                                            <img className='activityImage me-2' src={activityInfo[i]?.itemImage} alt="" />
    
                                                        </Typography>
                                                        <ListItemText
                                                            primary={
                                                                <Typography
                                                                    sx={{ display: 'inline' }}
                                                                    component="span"
                                                                    variant="h6"
                                                                    color="white"
                                                                >
                                                                    {activityInfo[i]?.contentTitle}
                                                                </Typography>
                                                            }
                                                            secondary={
                                                                <React.Fragment>
                                                                    <Typography
                                                                        sx={{ display: 'inline' }}
                                                                        component="span"
                                                                        variant="body1"
                                                                        color="white"
                                                                    >
                                                                        {activityInfo[i]?.ugcCaption}
                                                                    </Typography>
                                                                </React.Fragment>
                                                            }
                                                        />
                                                    </ListItem>
                                                    <Divider variant="inset" component="li" />
                                                </List>
                                            )
                                        } else{
                                            return (
                                                null
                                            )
                                        }
                                    })
                                }
                            </Container>
                        </Item>

                    </Grid>

                    {/* ***************************************************************************************** */}

                    <Grid item xs={7}>

                        {/* right column */}
                        <Item sx={{ backgroundColor: 'primary.dark' }}>

                            {/* right column header */}
                            <Toolbar
                                component="nav"
                                variant="dense"
                                sx={{ overflowX: 'auto', borderBottom: 1, borderColor: 'primary.light', justifyContent: 'center' }}
                            >
                                <Tab
                                    tabsList={tabsList}
                                    currentTab={currentTab}
                                    setCurrentTab={setCurrentTab}
                                />
                            </Toolbar>

                            {/* right column body */}
                            <Container sx={{
                                mt: 2, p: .5,
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'space-evenly',
                                position: 'relative',
                                overflow: 'hidden',
                                maxHeight: 1100
                            }} >
                                {
                                    tabsList[currentTab].view === "Achievements" ?
                                        <Achievements></Achievements>
                                        :
                                        tabsList[currentTab].view === "Friends" ?
                                            <Friends></Friends>
                                            :
                                            tabsList[currentTab].view === "GameClips" ?
                                                <Clips></Clips>
                                                :
                                                ""
                                }
                            </Container>
                        </Item>
                    </Grid>
                </Grid>
            </Box>

        </ThemeProvider>
    )
};

export default Dashboard;