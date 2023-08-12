import React from 'react';
import {Grid} from "@mui/material";
import Box from "@mui/material/Box";
import svgBitcoin from "../../pages/graph/bitcoin-circle-svgrepo-com.svg";
import Typography from "@mui/material/Typography";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import HistogramGraph from "../histogramGraph/histogramGraph";
import Paper from "@mui/material/Paper";

const CardGraphs = ({title,icon,fullTitle}) => {
    return (
        <Paper sx={{backgroundColor:'#808080'}} elevation={1}>
            <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
            >




                <Box>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                    >
                        <img src={icon}/>
                        <Box>
                            <Typography variant="h6" component="h6">{title}</Typography>
                            <Typography variant="h6" component="h6">{fullTitle}</Typography>
                        </Box>
                    </Grid>
                </Box>
                <Box>
                    <Typography variant="h6" component="h6">0.568</Typography>
                </Box>
                <Box>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                    >
                        <Typography variant="h6" component="h6">+7.53</Typography>
                        <ArrowUpwardIcon sx={{color:'green'}}></ArrowUpwardIcon>
                    </Grid>
                </Box>
                <Box>
                    <HistogramGraph></HistogramGraph>
                </Box>

            </Grid>
        </Paper>
    );
};

export default CardGraphs;
