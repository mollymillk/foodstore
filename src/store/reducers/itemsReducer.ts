import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

type cartItems = {
	[id: string] : number
}

const initialState:cartItems = {};


export const itemsSlice = createSlice({
	name: 'cartItems',
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<string>) => {
			// state.items.push(action.payload);
			state[action.payload] = 1;
		},
		addCount: (state, action: PayloadAction<string>) => {
			// state.items.push(action.payload);
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