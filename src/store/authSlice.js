import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: false,
  };

 const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers :{
        signIn: (state) => {
            state.value = true
        },
        signOut:(state) => {
            state.value = false
        }
    }
});

export const {signIn, signOut} = authSlice.actions;

export default authSlice.reducer;

