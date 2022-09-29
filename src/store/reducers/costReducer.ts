import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

type TotalCost = {
	cost: number
}

const initialState:TotalCost = {
	cost: 0
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
		discount50: (state) => {
			state.cost = (state.cost / 100) * 50;
		},
		discount200: (state) => {
			state.cost = state.cost - 200;
		},
		discount20: (state) => {
			state.cost = state.cost / 100 * 80;
		},
	}
});

export const {addToCost, removeFromCost, discount200, discount50, discount20} = costSlice.actions;
export const selectCost = (state: RootState) => state.totalCost.cost;

export default costSlice.reducer;