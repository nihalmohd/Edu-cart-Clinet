import { createSlice } from "@reduxjs/toolkit"
const INITIAL_STATE = {
    _id: "",
    Email: "",
  };
export const AdminSlice=createSlice({
    name:'Admin',
    initialState:INITIAL_STATE,
   
    reducers: {
        updateAdmin: (state, action) => {
          state.Email = action.payload.email;
          state._id = action.payload.id;
        },
        logoutAdmin:(state)=>{
           Object.assign(state,INITIAL_STATE)
        }
    }
})
export const {updateAdmin,logoutAdmin} =AdminSlice.actions
export default AdminSlice.reducer
