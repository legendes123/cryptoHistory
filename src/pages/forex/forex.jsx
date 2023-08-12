import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import {Button, FormControl, FormLabel, Select, TextField, Grid} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import DetailedGraph from "../../components/detailedGraph/ detailedGraph";
import {useDispatch, useSelector} from "react-redux";
import {changeTypeSort, fetchDataMonet} from "../../store/dataMonetSlice";

const Forex = () => {
    const [searchValue, setSearchValue] = useState('');

    const status = useSelector(state => state.dataMonet.status)
    const typeSort = useSelector(state => state.dataMonet.typeSort)
    const state = useSelector(state => state)

    const dispatch = useDispatch()

    const handleChangeSearchValue = (event) => {
        setSearchValue(event.target.value);
    }
    function handleSubmit(){
        dispatch(fetchDataMonet({typeSort, searchValue}))

    }
    function handleChange(event){
        dispatch(changeTypeSort(event.target.value))
    }
    console.log(state)

    return (

        <Box sx={{backgroundColor:'white',width:'100wh',height:'100vh'}}>
            <FormControl>
                <FormLabel>Enter crypto</FormLabel>
                <TextField onChange={handleChangeSearchValue}></TextField>
                <Button onClick={handleSubmit}>Submit</Button>
                <Select
                    onChange={handleChange}
                    sx={{
                        width: 250,
                        height: 50,
                    }}
                >
                    <MenuItem value={'Daily'}>Sort by daily</MenuItem>
                    <MenuItem value={'Weekly'}>Sort by week</MenuItem>
                    <MenuItem value={'Monthly'}>Sort by month</MenuItem>
                </Select>
            </FormControl>
            {status === 'resolved' &&
                <DetailedGraph></DetailedGraph>
            }

        </Box>
    );
};

export default Forex;
