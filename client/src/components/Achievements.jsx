

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

const Achievements = () => {
    let [achievementInfo, setAchievementInfo] = useState([])

    useEffect(() => {
        console.log("inside use effect")
        axios.get(`http://localhost:8000/api/achievements`)
            .then(res => {
                console.log("getting all achievement info -->", res)
                setAchievementInfo(res.data.results.titles)
            })
            .catch(err => console.log("Error", err))
            
    }, [])
    const organizedlist = []
    var page = [];
    for( let i = 0; i < achievementInfo.length; i++){
        if ( page.length >= 12){
            organizedlist.push(page)
            page = [];
        } else {
            console.log("reading else");
            page.push(achievementInfo[i])
        }
    }
    // const handleClick=(index)=>{
    //     console.log(index)
    //     const wordSlider=organizedlist[index].value;
    //     setWordData(wordSlider)
    // }
    return (
        <>
            {/* Achievement Cards */}
            {
                
                page.map((ach, i) => {
                    <h1 key={i} onClick={()=>handleClick(i)}>. </h1>
                    return (
                        <>
                        <Card sx={{ maxWidth: 120, m: 1 }}>
                            <CardActionArea
                            // href={`/game_acheievments/${achievementInfo[i].titleId}`}> VARIABLE ROUTE
                            href="/game_acheievments">
                                <CardMedia
                                    component="img"
                                    height="120"
                                    image={achievementInfo[i]?.images[4].url}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h7" component="div">
                                        {achievementInfo[i]?.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Gamerscore: {achievementInfo[i]?.achievement.currentGamerscore} of {achievementInfo[i]?.achievement.totalGamerscore}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        </>
                    )
                })
            }
            {/* <h1 key={i} onClick={()=>handleClick(i)}>i</h1> */}
        </>
    )
}

export default Achievements;