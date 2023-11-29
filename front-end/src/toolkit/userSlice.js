import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE={
    user : JSON.parse(localStorage.getItem('user')) || {},
}

const dapperSlice = createSlice({
    name: "user",       // name of the reducer
    initialState:INITIAL_STATE,         // initial state for this slice
    reducers : {
        setUser : (state,action)=>{
            state.user=action.payload;
            localStorage.setItem("user",JSON.stringify(action.payload));
        }
    }
})

export const{setUser}=dapperSlice.actions ;             // actions are used to dispatch an action in redux store
export default dapperSlice.reducer;                // returns a function that accepts two arguments and return new state