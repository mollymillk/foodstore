import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

type orderInfo = {
    card: string,
    address: string
}

const initialState:orderInfo = {
	card: '',
	address: ''
};

export const orderInfoSlice = createSlice({
	name: 'orderInfo',
	initialState,
	reducers: {
		setCard: (state, action: PayloadAction<string>) => {
			state.card = action.payload;
		},
		setAddress: (state, action: PayloadAction<string>) => {
			state.address= action.payload;
		}, 
		setDefaultOrderInfo: (state) => {
			state.card = '';
			state.address = '';
		}
	}
});

export const {setCard, setAddress, setDefaultOrderInfo} = orderInfoSlice.actions;
export const selectOrderInfo = (state:RootState) => state.orderInfo;

export default orderInfoSlice.reducer;