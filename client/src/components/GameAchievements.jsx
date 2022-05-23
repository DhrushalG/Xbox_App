
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {
    Link
} from "react-router-dom";


const GameAchievements = () => {
    const { titleId } = useParams();
    const [gameAchievementInfo, setGameAchievementInfo] = useState([])

    useEffect(() => {
        console.log("inside use effect")
        // axios.get(`http://localhost:8000/api/game_achievements/${titleId}`) // VARIABLE ROUTE
        axios.get(`http://localhost:8000/api/game_achievements`)
            .then(res => {
                console.log("getting all game achievements -->", res)
                setGameAchievementInfo(res.data.results.achievements)
            })
            .catch(err => console.log("Error", err))

    }, [])


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
        <>
            {/* Game Achievements */}
            <ThemeProvider theme={theme}>
                <Box sx={{
                    '& > :not(style)': {
                        mt: 3
                    },
                }}>

                    <Item sx={{ backgroundColor: 'black', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography
                            variant='h2'
                            sx={{ color: "primary.contrastText", marginLeft: 2 }}>
                            {gameAchievementInfo[0]?.titleAssociations[0].name}
                        </Typography>
                        <Typography
                            variant="dense"
                            sx={{ color: "primary.contrastText", marginRight: 2.5 }}>
                            <Button sx={{ color: 'secondary.main' }} href="/dashboard">Dashboard</Button>
                        </Typography>
                    </Item>

                    <Item sx={{ backgroundColor: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Box sx={{ backgroundColor: 'primary.dark', marginRight: 2 }}  >
                            <Typography
                                variant="h4"
                                sx={{ backgroundColor: 'primary.dark', color: "primary.contrastText", display: 'flex', margin: 5 }}>
                                Gamerscore:
                            </Typography>
                        </Box>
                        <Box sx={{ backgroundColor: 'primary.dark', marginLeft: 2 }} >
                            <Typography
                                variant="h4"
                                sx={{ color: "primary.contrastText", display: 'flex', margin: 5 }}>

                                Achievements: {gameAchievementInfo.length} / {gameAchievementInfo.length}
                            </Typography>
                        </Box>
                    </Item>

                    {
                        gameAchievementInfo.map((gach, i) => {
                            if (gameAchievementInfo[i].progressState == 'Achieved') {
                                return (
                                    <Item sx={{ backgroundColor: 'black', display: 'flex' }}>
                                        <Grid item xs={5} >
                                            <a href={gameAchievementInfo[i]?.mediaAssets[0].url} target="_blank"><img className='gameAchievementArt' src={gameAchievementInfo[i]?.mediaAssets[0].url} alt="" /></a>

                                        </Grid>
                                        <Grid item xs={9} sx={{ backgroundColor: 'primary.dark' }} >
                                            <Typography
                                                variant="h4"
                                                sx={{ color: "primary.contrastText", display: 'flex', justifyContent: 'space-between', marginTop: 3, marginBottom: 1, marginLeft: 5 }}>
                                                {gameAchievementInfo[i]?.name}
                                                <div className='d-flex me-4'>
                                                    <div className='gamerScoreG me-2'>G</div>{gameAchievementInfo[i]?.rewards[0].value}
                                                </div>
                                            </Typography>
                                            <Typography
                                                variant="h6"
                                                sx={{ color: "primary.contrastText", display: 'flex', marginLeft: 5 }}>
                                                {gameAchievementInfo[i]?.description}
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                sx={{ color: "primary.contrastText", display: 'flex', marginLeft: 5 }}>
                                                {gameAchievementInfo[i]?.rarity.currentPercentage}% of gamers unlocked this
                                                
                                            </Typography>
                                        </Grid>
                                    </Item>
                                )

                            } else {
                                return (
                                    <Item sx={{ backgroundColor: 'black', display: 'flex' }}>
                                        <Grid item xs={5} >
                                            <img className='gameAchievementArt opacity-25' src={gameAchievementInfo[i]?.mediaAssets[0].url} alt="" />

                                        </Grid>
                                        <Grid item xs={9} sx={{ backgroundColor: 'primary.dark' }} >
                                            <Typography
                                                variant="h4"
                                                sx={{ color: "primary.contrastText", display: 'flex', justifyContent: 'space-between', marginTop: 3, marginBottom: 1, marginLeft: 5 }}>
                                                {gameAchievementInfo[i]?.name}
                                                <div className='d-flex me-4'>
                                                    <div className='gamerScoreG me-2'>G</div>{gameAchievementInfo[i]?.rewards[0].value}
                                                </div>
                                            </Typography>
                                            <Typography
                                                variant="h6"
                                                sx={{ color: "primary.contrastText", display: 'flex', marginLeft: 5 }}>
                                                {gameAchievementInfo[i]?.description}
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                sx={{ color: "primary.contrastText", display: 'flex', marginLeft: 5 }}>
                                                {gameAchievementInfo[i]?.rarity.currentPercentage}% of gamers unlocked this
                                            </Typography>
                                        </Grid>
                                    </Item>
                                )
                            }
                        })
                    }
                </Box>
            </ThemeProvider>
            )
        </>
    )
}

export default GameAchievements;