import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loadState } from './storage';
import axios from 'axios';
import { LoginResponse } from '../interfaces/auth.interface';
import { PREFIX } from '../helpers/API';

export const JWT_PERSISTENT_STATE ='userData';

export interface UserPersistentState {
	jwt: string | null;
}

export interface UserState {
  jwt: string | null;
	loginState: null | 'rejected';
}

const initialState: UserState = {
	jwt: loadState<UserPersistentState>(JWT_PERSISTENT_STATE)?.jwt ?? null,
	loginState: null
};

export const login = createAsyncThunk('user/login',
	async (params: {email: string, password: string}) => {
		const { data } = await axios.post<LoginResponse>(`${PREFIX}/auth/login`, {
			email: params.email,
			password: params.password
		});
		return data;
	}
);

export const userSlise = createSlice({
	name: 'user',
	initialState,
	reducers: { 
		logout: (state) => {
			state.jwt = null;
		}
	},
	extraReducers: (builder) => {
		builder.addCase(login.fulfilled, (state, action: PayloadAction<LoginResponse>) => {
			state.jwt = action.payload.access_token;
		});
		builder.addCase(login.rejected, (state, error) => {
			console.log(error);
		});
	}
});

export default userSlise.reducer;
export const userAction = userSlise.actions;