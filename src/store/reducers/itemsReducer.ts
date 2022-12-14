import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import type {Products} from '../../components/Goods/getGoods';

type CartItems = {
	[id: keyof Products] : number
}

const initialState:CartItems = {};


export const itemsSlice = createSlice({
	name: 'cartItems',
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<keyof Products>) => {
			state[action.payload] = 1;
		},
		addCount: (state, action: PayloadAction<keyof Products>) => {
			state[action.payload] = state[action.payload] + 1;
		},
		remove: (state, action: PayloadAction<keyof Products>) => {
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