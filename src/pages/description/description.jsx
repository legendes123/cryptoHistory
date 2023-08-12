import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Button, Grid} from "@mui/material";
import PublicIcon from '@mui/icons-material/Public';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
const Description = () => {
    return (

        <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            sx={{height :'50vh',color:'white',padding:'50px'}}
        >
            <Box sx={{width:'50vw', textAlign:'left'}}>
                <Typography variant="h2" component="h1">
                    First metaverse exchange.Reliable.Transparent
                </Typography>
            </Box>
            <Box sx={{width:'20vw'}}>
                <Typography variant="h6" component="h3">
                    The Qmall exchange will launch its own metaverse before the end of this year
                </Typography>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    sx={{width:'15vw'}}
                >
                    <PublicIcon color='primary'></PublicIcon>
                    <Typography variant="h6" component="h6" color='#786f6f'>
                        500 000 Users from Europe
                    </Typography>
                </Grid>

                <Button variant="outlined" size='large' sx={{width:'15vw'}}>
                    Start trading
                    <ArrowOutwardRoundedIcon></ArrowOutwardRoundedIcon>
                </Button>
            </Box>
        </Grid>
    );
};

export default Description;
