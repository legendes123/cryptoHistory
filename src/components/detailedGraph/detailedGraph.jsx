import React, {useEffect} from 'react';
import Box from "@mui/material/Box";
import { DataGridPro } from '@mui/x-data-grid-pro';
import { useDemoData } from '@mui/x-data-grid-generator';
import {DataGrid} from "@mui/x-data-grid";
import {nanoid} from "nanoid";
import {useSelector} from "react-redux";
const DetailedGraph = (  ) => {
    const typeSort = useSelector(state => state.dataMonet.typeSort)
    const data = useSelector(state => state.dataMonet.data[`Time Series (Digital Currency ${typeSort})`])


    const rows = Object.entries(data).map((elem)=>{
        return {
            id: nanoid(),
            time:elem[0],
            ...elem[1]
        }
    })

    const columns = [
        {
            field: 'time',
            headerName: 'time',
            width: 110,
            editable: true,
        },
        {
            field: '3b. low (USD)',
            headerName: 'low (USD)',
            width: 110,
            editable: true,
        },
        {
            field: '1b. open (USD)',
            headerName: 'open (USD)',
            width: 110,
            editable: true,
        },
        {
            field: '4b. close (USD)',
            headerName: 'close (USD)',
            width: 110,
            editable: true,
        },
        {
            field: '2b. high (USD)',
            headerName: 'high (USD)',
            width: 110,
            editable: true,
        },
        {
            field: '3a. low (CNY)',
            headerName: 'low (CNY)',
            width: 110,
            editable: true,
        },
        {
            field: '1a. open (CNY)',
            headerName: 'open (CNY)',
            width: 110,
            editable: true,
        },
        {
            field: '4a. close (CNY)',
            headerName: 'close (CNY)',
            width: 110,
            editable: true,
        },
        {
            field: '2a. high (CNY)',
            headerName: 'high (CNY)',
            width: 110,
            editable: true,
        },
        {
            field: '6. market cap (USD)',
            headerName: 'market cap (USD)',
            width: 110,
            editable: true,
            backgroundColor:'red'
        },

    ];

    return (
        <Box sx={{ height: 700, width: '100%',
            '& .lowUsd': {
                backgroundColor: '#32CD32',
                color: 'white',
            },
            '& .openUsd': {
                backgroundColor: '#ADFF2F',
                color: 'white',
            },
            '& .closeUsd': {
                backgroundColor: '#FFA07A',
                color: 'white',
            },
            '& .highUsd': {
                backgroundColor: '#CD5C5C',
                color: 'white',
            },

        }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                pageSizeOptions={[10]}
                checkboxSelection
                disableRowSelectionOnClick
                getCellClassName={(params) => {
                    switch (params.colDef.headerName) {
                        case 'low (USD)':{
                            return params.value = 'lowUsd'
                        };
                        case 'open (USD)':{
                            return params.value = 'openUsd'
                        };
                        case 'close (USD)':{
                            return params.value = 'closeUsd'
                        };
                        case 'high (USD)':{
                            return params.value = 'highUsd'
                        };
                        case 'low (CNY)':{
                            return params.value = 'lowUsd'
                        };
                        case 'open (CNY)':{
                            return params.value = 'openUsd'
                        };
                        case 'close (CNY)':{
                            return params.value = 'closeUsd'
                        };
                        case 'high (CNY)':{
                            return params.value = 'highUsd'
                        };
                    }
                }}
            />
        </Box>
    );
};

export default DetailedGraph;
