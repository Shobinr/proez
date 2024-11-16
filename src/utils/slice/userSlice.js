import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'
import * as qs from 'qs'


// let data = qs.stringify({
//   'username': 'pradeep@provez.ai',
//   'password': 'Pradeep@123' 
// });




export const loginSubmit = createAsyncThunk(
  'users/loginSubmit',
  async (credentials) => {
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://122.165.80.8/api/auth/login?Content-Type=application/x-www-form-urlencoded',
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data : qs.stringify(credentials)
    };
    
    const response = await axios.request(config);
    return response.data;
  }
);



const userSlice = createSlice({
  name: 'user',
  initialState: {
    Users: null,
    loading: false,
    error: null,
  },
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginSubmit.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginSubmit.fulfilled, (state, action) => {
        state.loading = false;
        state.Users= action.payload;
        sessionStorage.setItem('user', JSON.stringify(action.payload));
      })
      .addCase(loginSubmit.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
