import { createSlice } from "@reduxjs/toolkit"
const INITIAL_STATE = {
    _id: "",
    Username: "",
    Email: "",
  };
export const UserSlice=createSlice({
    name:'user',
    initialState:INITIAL_STATE,
   
    reducers: {
        updateUser: (state, action) => {
          state.Username = action.payload.username;
          state.Email = action.payload.email;
          state._id = action.payload.id;
        },
        logoutUser:(state)=>{
           Object.assign(state,INITIAL_STATE)
        }
    }
})
export const {updateUser,logoutUser} =UserSlice.actions
export default UserSlice.reducer
