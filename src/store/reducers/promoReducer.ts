import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

type Promo = {
    [id:string] : boolean
}

const initialState:Promo = {
	'new50': false,
	'catch200': false,
	'fresh20': false,
};

export const promoSlice = createSlice({
	name: 'promo',
	initialState,
	reducers: {
		applyPromo: (state, action: PayloadAction<keyof Promo>) => {
			state[action.payload] = true;
		}, 
		resetPromo: () => initialState
	}
});

export const {applyPromo, resetPromo} = promoSlice.actions;
export const selectPromo = (state: RootState) => state.promo;

export default promoSlice.reducer;