import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    newsList : [],
    loading: false,
    error: false,
}

const newsSlice = createSlice({
  name: second,
  initialState,
  reducers: {
    clearNewList : () => {
        state.newsList = []
    }
}
});

export const {clearNewList} = newsSlice.actions

export default newsSlice.reducer