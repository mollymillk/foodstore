import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface cartItems {
	items: string[]
}

const initialState:cartItems = {
	items: [],
};

export const itemsSlice = createSlice({
	name: 'cartItems',
	initialState,
	reducers: {
		add: (state, action: PayloadAction<string>) => {
			state.items.push(action.payload)
		},
		remove: (state, action: PayloadAction<string>) => {
			state.filter(item => item !== action.payload)
		}
	}
})

export const {add, remove} = itemsSlice.actions;
export const selectItems = (state: RootState) => state.items.value;

export default itemsSlice.reducer;