import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  CameraImage:null
};


export const cameraSlice = createSlice({
  name: 'camera',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setCameraImage: (state, action) => {
      state.CameraImage = action.payload;
    },
    resetCameraImage: (state) => {
      state.CameraImage = null;
    }
   
  },
 
});

export const { setCameraImage, resetCameraImage } = cameraSlice.actions;


export const selectCameraImage = (state) => state.camera.CameraImage;



export default cameraSlice.reducer;
