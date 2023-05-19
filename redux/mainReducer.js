import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    interval: 30
};

const mainReducer = createSlice({
    name: 'main',
    initialState,
    reducers: {
        handleInterval(state, { payload }) {
            state.interval = payload;
        }
    }
});

export const { handleInterval } = mainReducer.actions;

export default mainReducer.reducer;
