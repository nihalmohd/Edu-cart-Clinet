import { createSlice } from "@reduxjs/toolkit"
const INITIAL_STATE = {
    _id: "",
    Username: "",
    Email: "",
  };
export const MentorSlice=createSlice({
    name:'Mentor',
    initialState:INITIAL_STATE,
   
    reducers: {
        updateMentor: (state, action) => {
          state.Username = action.payload.username;
          state.Email = action.payload.email;
          state._id = action.payload.id;
        },
        logoutMentor:(state)=>{
           Object.assign(state,INITIAL_STATE)
        }
    }
})
export const {updateMentor,logoutMentor} =MentorSlice.actions
export default MentorSlice.reducer
