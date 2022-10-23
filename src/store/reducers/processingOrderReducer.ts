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
		canceled?: boolean,
		phone: string,
		card: string
}

type Orders = Order[];

const initialState:Orders = [{
	orderId: 43278,
	phone: '89031064618',
	goods: {
		'4602048004109': 1,
		'2800110010009': 1,
		'7613034227775': 1
	},
	address: 'г. Ростов-на-Дону, ул. 8 Марта, 25/29',
	time: 'четверг, 13 октября 2022 г., 12:39',
	totalCost: 842,
	canceled: false,
	seconds: 1665664763000,
	card: '5666'
},
{
	orderId: 76248,
	phone: '89031064618',
	goods: {
		'4791045000150': 1,
		'4607117891833': 1,
		'4620016810354': 2,
		'4600699501121': 1
	},
	address: 'г. Краснодар, ул. Восточно-Кругликовская, 30, кв 210',
	time: 'вторник, 6 сентября 2022 г., 15:17',
	totalCost: 652,
	canceled: false,
	seconds: 1662477443000,
	card: '5666'
}];

export const processingOrderSlice = createSlice({
	name: 'processingOrder',
	initialState,
	reducers: {
		proccessOrder: (state, action: PayloadAction<Order>) => {
			state.unshift(action.payload);
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