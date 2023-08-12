import React from 'react';
import {FormControl, Grid, InputLabel, ListItemButton, ListItemText, Select, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PublicIcon from "@mui/icons-material/Public";
import Typography from "@mui/material/Typography";
import Paper from '@mui/material/Paper';
import svgBitcoin from './bitcoin-circle-svgrepo-com.svg';
import svgEthereum from './eth-alt-svgrepo-com.svg';
import svgBinance from './binance-coin-seeklogo.com.svg';
import svgTether from './icons8-tether.svg';
import SwapVertIcon from '@mui/icons-material/SwapVert';

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import MenuItem from "@mui/material/MenuItem";
import {ArgumentAxis, BarSeries, Chart, ValueAxis} from "@devexpress/dx-react-chart";
import HistogramGraph from "../../components/histogramGraph/histogramGraph";
import CardGraphs from "../../components/cardGraphs/cardGraphs";
const data = [
    { argument: 'Monday', value: 30 },
    { argument: 'Tuesday', value: 20 },
    { argument: 'Wednesday', value: 10 },
    { argument: 'Thursday', value: 50 },
    { argument: 'Friday', value: 60 },
];

const Graph = () => {

    return (
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            sx={{height :'75vh',color:'white',padding:'50px'}}
        >
            <Grid
                container
                direction="column"
                justifyContent="space-around"
                alignItems="center"
                sx={{height :'35vh',width:'15vw',backgroundColor:'#FF4500',borderRadius:'10%'}}
            >
                <AutoAwesomeIcon sx={{height :'10vh',width:'10vw'}}></AutoAwesomeIcon>
                <Typography sx={{ textAlign: 'center', }} variant="h6" component="h6">The first crypto exchange to enter the european market</Typography>
                <PublicIcon sx={{height :'5vh',width:'5vw'}} color='primary'></PublicIcon>
            </Grid>

            <Grid
                container
                direction="column"
                justifyContent="space-between"
                alignItems="stretch"
                sx={{height :'65vh',width:'40vw',backgroundColor:'#808080',borderRadius:'5%'}}
            >
                <Paper sx={{backgroundColor:'#808080'}} elevation={1}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-around"
                        alignItems="flex-start"
                    >
                        <Typography variant="h6" component="h6">Market</Typography>
                        <Typography variant="h6" component="h6">Price</Typography>
                        <Typography variant="h6" component="h6">Change 24H</Typography>
                        <Typography variant="h6" component="h6">Dynamic</Typography>
                    </Grid>
                </Paper>
                <CardGraphs fullTitle='Ethereum' title='ETH' icon={svgEthereum}></CardGraphs>
                <CardGraphs fullTitle='Bitcoin' title='BTC' icon={svgBitcoin}></CardGraphs>
                <CardGraphs fullTitle='Binance Coin' title='BNB' icon={svgBinance}></CardGraphs>
                <CardGraphs fullTitle='Tether' title='USDt' icon={svgTether}></CardGraphs>



            </Grid>
            <Grid
                direction="column"
                justifyContent="space-around"
                alignItems="center"
            >
                <Box sx={{padding:'20px'}}>
                    <Box sx={{height :'20vh',width:'20vw',backgroundColor:'white',borderRadius:'5%',color:'black'}}>
                        <Paper>
                            <Typography variant="h6" component="h6">Exchange</Typography>
                        </Paper>

                        <Grid
                            container
                            direction="row"
                            justifyContent="space-around"
                            alignItems="flex-start"
                        >
                            <Typography variant="h6" component="h6">Pay: $12,356,45</Typography>
                            <Box sx={{ minWidth: 70 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={11}
                                        label="123"
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>

                        </Grid>
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-around"
                            alignItems="flex-start"
                        >
                            <TextField id="outlined-basic" label="Value" variant="outlined" />

                        </Grid>
                    </Box>
                    <Box sx={{position:'absolute',bottom:'125px',right:'240px',width:'40px',height:'40px',borderRadius:'50%',backgroundColor:'orange',margin:'0 auto'}}>
                        <SwapVertIcon sx={{width:'40px',height:'40px',margin:'0 auto'}}></SwapVertIcon>
                    </Box>
                    <Box sx={{height :'20vh',width:'20vw',backgroundColor:'white',borderRadius:'5%',color:'black',mt:'5px'}}>
                        <Paper>
                            <Typography variant="h6" component="h6">Exchange</Typography>
                        </Paper>

                        <Grid
                            container
                            direction="row"
                            justifyContent="space-around"
                            alignItems="flex-start"
                        >
                            <Typography variant="h6" component="h6">Pay: $12,356,45</Typography>
                            <Box sx={{ minWidth: 70 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={11}
                                        label="123"
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>

                        </Grid>
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-around"
                            alignItems="flex-start"
                        >
                            <TextField id="outlined-basic" label="Value" variant="outlined" />

                        </Grid>
                    </Box>
                </Box>

            </Grid>




        </Grid>
    );
};

export default Graph;
