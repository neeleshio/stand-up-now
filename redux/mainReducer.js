import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    min: 15,
    start: false,
    standMin: 15,
    standTimerOn: false,
    pause: false
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
            if (!state.start) {
                state.pause = false;
            }
        },
        handleStandInterval(state) {
            state.standMin = state.standMin - 1;
        },
        hanldeStandTimer(state, { payload }) {
            state.standTimerOn = payload;
        },
        handleStandMinute(state, { payload }) {
            state.standMin = payload;
        },
        handlePause(state, { payload }) {
            if (state.start) {
                if (payload === true || payload === false) {
                    state.pause = payload;
                } else {
                    state.pause = !state.pause;
                }
            }
        }
    }
});

export const {
    handleInterval,
    handleStart,
    handleMinute,
    handleStandMinute,
    hanldeStandTimer,
    handleStandInterval,
    handlePause
} = mainReducer.actions;

export default mainReducer.reducer;
