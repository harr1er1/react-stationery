import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    paginationId: 0,
}

export const paginationSlice = createSlice({
    name: "pagination",
    initialState,
    reducers: {
        setPaginationId: (state, action) => {
            state.paginationId = action.payload
        },
        setPaginationNull: (state) => {
            state.paginationId = 0;
        }
    },
})

export const selectPaginationId = (state) => state.pagination

export const {setPaginationId, setPaginationNull} = paginationSlice.actions;

export default paginationSlice.reducer;
