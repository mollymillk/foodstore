import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

type Authorization = {
	isAuthorized: boolean,
    name: string,
	phone: string
}

const initialState:Authorization = {
	isAuthorized: false,
	name: '',
	phone: ''
};

export const authorizationSlice = createSlice({
	name: 'authorization',
	initialState,
	reducers: {
		login: (state, action: PayloadAction<string[]>) => {
			state.isAuthorized = true,
			state.name = action.payload[0];
			state.phone = action.payload[1];
		},
		logout: () => initialState
	}
});

export const {login, logout} = authorizationSlice.actions;
export const selectAuthorization = (state:RootState) => state.authorization;

export default authorizationSlice.reducer;