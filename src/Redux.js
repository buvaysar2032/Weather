import {combineReducers, configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
}

export const dataAction = createAsyncThunk('DATA', async () => {
    const weather = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=47.287588&lon=39.760782&appid=e37e1d2ea8d6a92ab3ba34893319b2fc')
    const data = await weather.json()
    return data
})

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    extraReducers: {
        [dataAction.fulfilled]: (state, action) => {
            state.data = action.payload
        }
    }
})

const rootReducer = combineReducers({
    toolkit: weatherSlice.reducer
})

export const store = configureStore({
    reducer: rootReducer
})