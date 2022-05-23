

import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

const Friends = () => {

    let [friendsList, setFriendsList] = useState([])
    // let [chatList, setChatList] = useState([])

    useEffect(() => {
        console.log("inside use effect")
        axios.get(`http://localhost:8000/api/friends`)
            .then(res => {
                console.log("getting all friends info -->", res)
                setFriendsList(res.data.results.people)
            })
            .catch(err => console.log("Error", err))

    }, [])

    // useEffect(() => {
    //     console.log("inside use effect")
    //     axios.get(`http://localhost:8000/api/conversations/${chatId}`)
    //         .then(res => {
    //             console.log("getting all chat info -->", res)
    //             setChatList(res.data.results.primary.conversations)
    //         })
    //         .catch(err => console.log("Error", err))

    // }, [])

    return (
        <>
            {
                friendsList.map((fri, i) => {
                    if (friendsList[i].realName != ``) {
                        if(friendsList[i].presenceState != `Offline` ){
                            return (
                                <List sx={{ width: '100%', color: 'white' }}>
                                    <ListItem alignItems="flex-start">
                                        <ListItemAvatar>
                                            <Avatar alt={friendsList[i]?.gamertag} src={friendsList[i]?.displayPicRaw} />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="h6"
                                                    color="white"
                                                >
    
                                                    {friendsList[i]?.gamertag}&nbsp;
                                                    - &nbsp;{friendsList[i]?.realName}
                                                </Typography>
                                            }
                                            secondary={
                                                <React.Fragment>
                                                    <Typography
                                                        sx={{ display: 'inline' }}
                                                        component="span"
                                                        variant="body1"
                                                        color="green"
                                                    >
                                                        {friendsList[i]?.presenceText}
                                                    </Typography>
                                                </React.Fragment>
                                            }
                                        />
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                </List>
                            )
                        } else {
                            return (
                                <List sx={{ width: '100%', color: 'white' }}>
                                    <ListItem alignItems="flex-start">
                                        <ListItemAvatar>
                                            <Avatar alt={friendsList[i]?.gamertag} src={friendsList[i]?.displayPicRaw} />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="h6"
                                                    color="white"
                                                >
    
                                                    {friendsList[i]?.gamertag}&nbsp;
                                                    - &nbsp;{friendsList[i]?.realName}
                                                </Typography>
                                            }
                                            secondary={
                                                <React.Fragment>
                                                    <Typography
                                                        sx={{ display: 'inline' }}
                                                        component="span"
                                                        variant="body1"
                                                        color="silver"
                                                    >
                                                        {friendsList[i]?.presenceText}
                                                    </Typography>
                                                </React.Fragment>
                                            }
                                        />
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                </List>
                            )
                        }
                    } else{
                        if(friendsList[i].presenceState != `Offline`){
                            return (
                                <List sx={{ width: '100%', color: 'white' }}>
                                    <ListItem alignItems="flex-start">
                                        <ListItemAvatar>
                                            <Avatar alt={friendsList[i]?.gamertag} src={friendsList[i]?.displayPicRaw} />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="h6"
                                                    color="white"
                                                >
    
                                                    {friendsList[i]?.gamertag}
                                                </Typography>
                                            }
                                            secondary={
                                                <React.Fragment>
                                                    <Typography
                                                        sx={{ display: 'inline' }}
                                                        component="span"
                                                        variant="body1"
                                                        color="green"
                                                    >
                                                        {friendsList[i]?.presenceText}
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
                                <List sx={{ width: '100%', color: 'white' }}>
                                    <ListItem alignItems="flex-start">
                                        <ListItemAvatar>
                                            <Avatar alt={friendsList[i]?.gamertag} src={friendsList[i]?.displayPicRaw} />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="h6"
                                                    color="white"
                                                >
    
                                                    {friendsList[i]?.gamertag}
                                                </Typography>
                                            }
                                            secondary={
                                                <React.Fragment>
                                                    <Typography
                                                        sx={{ display: 'inline' }}
                                                        component="span"
                                                        variant="body1"
                                                        color="silver"
                                                    >
                                                        {friendsList[i]?.presenceText}
                                                    </Typography>
                                                </React.Fragment>
                                            }
                                        />
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                </List>
                            )
                        }
                    }
                })
            }
        </>
    )

}
export default Friends;