import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categoryId: 0,
}

export const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId(state, action ) {
            state.categoryId = action.payload
        },
    },

})

export const selectFilter = (state) => state.filter;

export const { setCategoryId } = filterSlice.actions;
export default filterSlice.reducer;
