import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  selectedImage: null
};


export const appSlice = createSlice({
  name: 'app',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    selectImage: (state, action) => {
      state.selectedImage = action.payload;
    },
    resetImage: (state) => {
      state.selectedImage = null;
    },

    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    }
  },

});

export const { selectImage, resetImage, login, logout } = appSlice.actions;


export const selectUser = (state) => state.app.user;
export const selectSelectedImage = (state) => state.app.selectedImage;



export default appSlice.reducer;
