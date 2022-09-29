import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export type CartItems = {
	[id:string] : number
}

const initialState:CartItems = {};


export const itemsSlice = createSlice({
	name: 'cartItems',
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<string>) => {
			state[action.payload] = 1;
		},
		addCount: (state, action: PayloadAction<string>) => {
			state[action.payload] = state[action.payload] + 1;
		},
		remove: (state, action: PayloadAction<string>) => {
			state[action.payload] = state[action.payload] - 1;
		}
	}
});

export const {addItem, addCount, remove} = itemsSlice.actions;
export const selectItems = (state: RootState) => state.cartItems;

export default itemsSlice.reducer;