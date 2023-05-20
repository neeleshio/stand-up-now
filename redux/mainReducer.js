import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    min: 15,
    start: false,
    standMin: 15,
    standTimerOn: false
};

const mainReducer = createSlice({
    name: 'main',
    initialState,
    reducers: {
        handleInterval(state) {
            state.min = state.min - 1;
        },
        handleMinute(state, { payload }) {
            state.min = payload;
        },
        handleStart(state) {
            state.start = !state.start;
        },
        handleStandInterval(state) {
            state.standMin = state.standMin - 1;
        },
        hanldeStandTimer(state, { payload }) {
            state.standTimerOn = payload;
        },
        handleStandMinute(state, { payload }) {
            state.standMin = payload;
        }
    }
});

export const {
    handleInterval,
    handleStart,
    handleMinute,
    handleStandMinute,
    hanldeStandTimer,
    handleStandInterval
} = mainReducer.actions;

export default mainReducer.reducer;
