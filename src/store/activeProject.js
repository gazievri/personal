import { createSlice } from '@reduxjs/toolkit';

const activeProjectSlice = createSlice({
  name: 'activeProject',
  initialState: {
    data: {},
  },

  reducers: {
    setActiveProject(state, action) {
      state.data = action.payload;
    },
  },
});

export const { setActiveProject } = activeProjectSlice.actions;
export default activeProjectSlice.reducer;
