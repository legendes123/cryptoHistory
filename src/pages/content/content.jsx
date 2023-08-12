import React from 'react';
import Header from "../header/header";
import Description from "../description/description";
import Graph from "../graph/graph";
import Box from "@mui/material/Box";

const Content = () => {
    return (
        <Box sx={{backgroundColor:'black',color:'white'}}>
            <Description/>
            <Graph></Graph>
        </Box>
    );
};

export default Content;
