import {createSlice} from '@reduxjs/toolkit';


const popupSlice = createSlice({
  name: 'popup',
  initialState : {isPopup : false , popupData : {} },
  reducers: {
    showPopup(state , action) {
      state.isPopup = true
      state.popupData = action.payload
    },
    hidePopup(state,action){
      state.isPopup = false
      state.popupData = {}
    }
  }
});
   
    

 
 export const  popupActions = popupSlice.actions;
 export default popupSlice;