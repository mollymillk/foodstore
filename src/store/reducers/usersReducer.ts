import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';


type User = {
    userName: string,
    phone: string,
    email: string,
    password: string
}

const initialState:User[] = [
	{
		userName: 'Дарья',
		phone: '89031064618',
		email: 'daria@mail.ru',
		password: '123qwerty'
	}
];

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		addUser: (state, action: PayloadAction<User>) => {
			state.push(action.payload);
		}
	}
});

export const {addUser} = usersSlice.actions;
export const selectUsers = (state:RootState) => state.users;

export default usersSlice.reducer;