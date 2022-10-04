import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

type TotalCost = {
	cost: number,
	promoSale: [string, number]
}

const initialState:TotalCost = {
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
		removeFromCost: (state, action: PayloadAction<number>) => {
			state.cost -= action.payload;
		},
		addPromoSale: (state, action: PayloadAction<[string, number]>) => {
			state.promoSale = action.payload
		},
		removePromoSale: (state) => {
			state.promoSale = ['promo', 0]
		}
	}
});

export const {addToCost, removeFromCost, addPromoSale, removePromoSale} = costSlice.actions;
export const selectCost = (state: RootState) => state.totalCost.cost;

export default costSlice.reducer;