import React, { useState, useEffect } from 'react';
import { Grid, Button, Typography, IconButton, Card } from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import {Link} from 'react-router-dom';

const pages = {
    JOIN: 'page.join',
    CREATE: 'pages.create',
}

export default function Info(props) {
    const [page, setPage] = useState(pages.JOIN);

    function joinInfo() {
        return `This app connects with your spotify account and get access to what song
        are you listening, then you can get into a room with other users (or create a room
            yourself) and listen the same song with the other participants. In the room the song can be skipped if
            the participant reach the amount of votes needed. The host (the user that created the
                room) can pass the song in any moment.`;
    }

    function createInfo() {
        return `This app does NOT reproduce sounds by itself, it is connected with your spotify account so
        the music will be reproduced in your device from the spotify app, each time that the song change in the room so in your
        device too. Important: You need to have spotify premium in order to make the pause/skip song request`;
    }

    useEffect(()=> {});

    return (
        <Grid container spacing={1}>
            <Grid item xs={12} align="center">
                <Typography component="h4" variant="h4">
                    What is House Party?
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <Card variant="elevation" style={{backgroundColor: "#00c0c9", padding: "15px", marginTop: "20px"}}>
                <Typography variant="body1" align="justify">
                    {page === pages.JOIN ? joinInfo() : createInfo() }
                </Typography>
                </Card>
            </Grid>
            <Grid item xs={12} align="center">
                <IconButton onClick={()=>{page === pages.CREATE ? setPage(pages.JOIN) : setPage(pages.CREATE)}}>
                {page === pages.CREATE ? (<NavigateBeforeIcon/>) : (<NavigateNextIcon/>)}
                </IconButton>
            </Grid>
            <Grid item xs={12} align="center">
                <Button color="secondary" variant="contained" to="/" component={Link}>
                    Back
                </Button>
            </Grid>
        </Grid>
    )
}