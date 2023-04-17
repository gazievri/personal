import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
  name: 'post',
  initialState: {
    data: {},
  },

  reducers: {
    setPostData(state, action) {
      state.data = action.payload;
    },
  },
});

export const { setPostData } = postSlice.actions;
export default postSlice.reducer;
