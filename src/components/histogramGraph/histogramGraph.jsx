import React from 'react';
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import Box from "@mui/material/Box";

const HistogramGraph = () => {
    const labels = ["January", "February", "March", "April", "May", "June"];
    const data = {
        labels: labels,
        datasets: [
            {
                label: '',
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                data: [0, 10, 5, 2, 20, 30, 45],
            },
        ],
    };
    return (
        <Box sx={{height: '110px'}}>
            <Bar width={220} height={90} data={data} />
        </Box>
    );
};

export default HistogramGraph;
