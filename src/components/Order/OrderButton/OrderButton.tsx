import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { useDispatch } from 'react-redux';
import { setDefaultCost, removePromoSale } from '../../../store/reducers/costReducer';
import { setDefaultItems } from '../../../store/reducers/itemsReducer';
import { setDefaultOrderInfo } from '../../../store/reducers/orderInfoReducer';
import { resetPromo } from '../../../store/reducers/promoReducer';
import './OrderButton.sass';
import { Modal } from '../../Modal/Modal';

type Props = {
	isPaymentAllowed: boolean
}

export const OrderButton = ({isPaymentAllowed}:Props) => {

	const [isModalActive, setIsModalActive] = useState(false);

	const totalCost = useSelector((state:RootState) => state.totalCost.cost);
	const orderInfo = useSelector((state:RootState) => state.orderInfo);

	const dispatch = useDispatch();
	
	const handlePayOrder = () => {
		dispatch(setDefaultCost());
		dispatch(setDefaultItems());
		dispatch(setDefaultOrderInfo());
		dispatch(removePromoSale());
		dispatch(resetPromo());
		setIsModalActive(true);
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
		<Modal data='paidOrder' active={isModalActive} setActive={setIsModalActive}/>
	</>;
};