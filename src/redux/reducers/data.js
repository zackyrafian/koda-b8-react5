import { createSlice } from "@reduxjs/toolkit";


const initialState = { 
  surveyList: [],
}

const dataSlice = createSlice({ 
  name: 'data', 
  initialState, 
  reducers: { 
    addData(state, action) { 
      state.surveyList.push(action.payload);
    }, 
    removeData(state, action) { 
      state.surveyList.splice(action.payload, 1);
    },
  }
})

export const { addData, removeData } = dataSlice.actions;
export default dataSlice.reducer;