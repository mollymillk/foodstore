import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

type CartItems = {
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
		},
		setDefaultItems: (state) => {
			Object.keys(state).map(id => state[id] = 0);
		}
	}
});

export const {addItem, addCount, remove, setDefaultItems} = itemsSlice.actions;
export const selectItems = (state: RootState) => state.cartItems;

export default itemsSlice.reducer;