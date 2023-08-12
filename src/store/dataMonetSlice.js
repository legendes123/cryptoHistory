import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {getDataMonetDaily} from "../request/getDataMonetDaily";
import {getDataMonetWeekly} from "../request/getDataMonetWeekly";
import {getDataMonetMonthly} from "../request/getDataMonetMonthly";

export const fetchDataMonet = createAsyncThunk(
	'films/fetchDataMonet',
	async function({ typeSort, searchValue }){
		console.log(typeSort)
		switch (typeSort){
			case 'Daily':{
				const fetchGetDataMonetDaily = await getDataMonetDaily(searchValue)
				return fetchGetDataMonetDaily
			}
			case 'Weekly':{
				const fetchGetDataMonetWeekly = await getDataMonetWeekly(searchValue)
				return fetchGetDataMonetWeekly
			}
			case 'Monthly':{
				const fetchGetDataMonetMonthly = await getDataMonetMonthly(searchValue)
				return fetchGetDataMonetMonthly
			}
			default: {
				console.error('no exception')
			}

		}

	}
)

const dataMonetSlice = createSlice({
	name: "dataMonet",
	initialState: {
		data: [],
		status: 'loading',
		typeSort: 'Sort by daily'
	},
	reducers: {
		changeTypeSort(state, action) {
			state.typeSort = action.payload
		},
	},
	extraReducers:{
		[fetchDataMonet.fulfilled]:(state,action)=>{
			state.data = action.payload
			state.status = 'resolved'

		},
		[fetchDataMonet.rejected]:(state,action)=>{
			state.status = 'error'
		},
	}

});

export const { changeTypeSort } = dataMonetSlice.actions;
export default dataMonetSlice.reducer;
