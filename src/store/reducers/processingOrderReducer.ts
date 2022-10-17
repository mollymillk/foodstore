import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

type Goods = {
	[id:string]: number
}

type Order = {
		orderId: number;
        goods: Goods,
        time: string;
		seconds: number;
        address: string,
        totalCost: number
		canceled?: boolean
}

type Orders = Order[];

const initialState:Orders = [];

export const processingOrderSlice = createSlice({
	name: 'processingOrder',
	initialState,
	reducers: {
		proccessOrder: (state, action: PayloadAction<Order>) => {
			state.push(action.payload);
		},
		cancel: (state, action: PayloadAction<Order['orderId']>) => {
			const index = state.findIndex((order:Order) => order.orderId===action.payload);
			state[index].canceled = true;
		}
	}
});

export const {proccessOrder, cancel} = processingOrderSlice.actions;
export const selectProccesingOrder = (state: RootState) => state;

export default processingOrderSlice.reducer;