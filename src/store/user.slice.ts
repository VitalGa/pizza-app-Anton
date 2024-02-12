import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
  jwt: string | null;
}

const initialState: UserState = {
	jwt: null
};

export const userSlise = createSlice({
	name: 'user',
	initialState,
	reducers: {
		addjwt: (state) => {
			state.jwt = 'eecev';
		},
		logout: (state) => {
			state.jwt = null;
		}
	}
});

export default userSlise.reducer;
export const userAction = userSlise.actions;