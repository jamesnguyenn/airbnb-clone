import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: {},
    isLoading: false,
    errText: '',
};

const locationSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        getLocationListsRequest(state) {
            return {
                ...state,
                isLoading: true,
            };
        },
        getLocationListsSuccess(state, actions) {
            const { payload } = actions;
            return {
                ...state,
                data: payload,
                isLoading: false,
            };
        },
        getLocationListsFailed(state, actions) {
            const { payload } = actions;
            return {
                ...state,
                isLoading: false,
                errText: payload,
            };
        },
    },
});

export const { getLocationLists } = locationSlice.actions;
export default locationSlice.reducer;
