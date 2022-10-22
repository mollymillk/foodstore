import { PromoCodes } from './../../components/Order/promoCodes';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

type TotalCost = {
	fullCost: number;
	cost: number,
	promoSale: [keyof PromoCodes, number]
}

const initialState:TotalCost = {
	fullCost: 0,
	cost: 0,
	promoSale: ['promo', 0]
};

export const costSlice = createSlice({
	name: 'totalCost',
	initialState,
	reducers: {
		addToCost: (state, action: PayloadAction<number>) =>  {
			state.cost += action.payload;
		},
		addToFullCost: (state, action: PayloadAction<number>) =>  {
			state.fullCost += action.payload;
		},
		removeFromCost: (state, action: PayloadAction<number>) => {
			state.cost -= action.payload;
		},
		removeFromFullCost: (state, action: PayloadAction<number>) => {
			state.fullCost -= action.payload;
		},
		addPromoSale: (state, action: PayloadAction<[keyof PromoCodes, number]>) => {
			state.promoSale = action.payload;
		},
		removePromoSale: (state) => {
			state.promoSale = ['promo', 0];
		},
		setDefaultCost: (state) => {
			state.cost = 0;
			state.fullCost = 0;
		}
	}
});

export const {addToCost, addToFullCost, removeFromCost, removeFromFullCost, addPromoSale, removePromoSale, setDefaultCost} = costSlice.actions;
export const selectCost = (state: RootState) => state.totalCost.cost;

export default costSlice.reducer;