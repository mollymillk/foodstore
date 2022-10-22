import React from 'react';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { useDispatch } from 'react-redux';
import { setDefaultCost, removePromoSale } from '../../../store/reducers/costReducer';
import { setDefaultItems } from '../../../store/reducers/itemsReducer';
import { setDefaultOrderInfo } from '../../../store/reducers/orderInfoReducer';
import { resetPromo } from '../../../store/reducers/promoReducer';
import './OrderButton.sass';
import { proccessOrder } from '../../../store/reducers/processingOrderReducer';

type Props = {
	isPaymentAllowed: boolean,
	setActive: React.Dispatch<React.SetStateAction<boolean>>
}

interface DateTimeFormatOptions {
	weekday: 'long' | 'short' | 'narrow';
	year: 'numeric' | '2-digit';
	month: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow';
	day: 'numeric' | '2-digit';
	hour: 'numeric' | '2-digit';
	minute: 'numeric' | '2-digit';
}

const options:DateTimeFormatOptions = {
	year: 'numeric',
	month: 'long',
	day: 'numeric',
	weekday: 'long',
	hour: 'numeric',
	minute: 'numeric',
};

export const OrderButton = ({isPaymentAllowed, setActive}:Props) => {

	const totalCost = useSelector((state:RootState) => state.totalCost.cost);
	const orderInfo = useSelector((state:RootState) => state.orderInfo);
	const goods = useSelector((state:RootState) => state.cartItems);
	const user = useSelector((state:RootState) => state.authorization);


	const dispatch = useDispatch();
	
	const handlePayOrder = () => {
		const now = new Date();
		const timeToSend = now.toLocaleDateString('ru', options);
		const orderId = 11111 - 0.5 + Math.random() * 88889;

		const dataToSend = {
			orderId: orderId,
			goods: goods,
			time: timeToSend,
			seconds: now.getTime(),
			address: orderInfo.address,
			totalCost: totalCost,
			phone: user.phone,
			card: orderInfo.card
		};
	
		setActive(true);
		dispatch(proccessOrder(dataToSend));
		dispatch(setDefaultCost());
		dispatch(setDefaultItems());
		dispatch(setDefaultOrderInfo());
		dispatch(removePromoSale());
		dispatch(resetPromo());
	};

	return <>

		<Button
			disabled={!isPaymentAllowed}
			className='order_button'
			variant="contained"
			onClick={()=>handlePayOrder()}
		>
		Оплатить
		</Button>

		{
			totalCost < 500 &&
			<p className='order_hint'>Еще {500 - totalCost}р до минимального заказа</p>
		}

		{
			totalCost >= 500 && (!orderInfo.card || !orderInfo.address) &&
			<p className='order_hint'>Пожалуйста, введите данные для заказа</p>
		}

	</>;
};