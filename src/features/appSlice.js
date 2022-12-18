import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showModal: true
};


export const appSlice = createSlice({
  name: 'app',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setShowModal: (state) => {
      state.showModal = !state.showModal;
    },
    
   
  },
 
});

export const { setShowModal } = appSlice.actions;


export const selectShowModal = (state) => state.app.showModal;



export default appSlice.reducer;
