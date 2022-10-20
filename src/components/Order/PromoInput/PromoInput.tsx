import { Form, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addPromoSale, removePromoSale } from '../../../store/reducers/costReducer';
import { RootState } from '../../../store/store';
import { PromoCodes, promoCodes } from '../promoCodes';
import './PromoInput.sass';

export const PromoInput = () => {

	const promoSale = useSelector((state:RootState) => state.totalCost.promoSale);
	const cost = useSelector((state:RootState) => state.totalCost.cost);
	const orderItems = useSelector((state: RootState)=> state.cartItems);
	const orders = useSelector((state:RootState) => state.processingOrder);
	const userPhone = useSelector((state:RootState) => state.authorization.phone);
	

	const currentOrders = orders.filter(order => order.phone === userPhone);



	const [promo, setPromo] = useState<keyof PromoCodes|string>(promoSale[0]);
	const [helperText, setHelperText] = useState<string>('Введите промокод');

	const errorMessages = {
		catch200: `Добавьте товары на сумму ${1500 - cost} рублей`,
		fresh20: 'Акция действует до 12:00',
		new50: 'Акция действует на первый заказ :('
	};

	const dispatch = useDispatch();

	useEffect(()=> {
		if (promoSale[0] == 'promo') {
			setHelperText('Введите промокод');
		} else if (promoSale[0] !== 'promo' && promoSale[1] == 0) {
			setHelperText(errorMessages[promo]);
		} else {
			setHelperText('Промокод применён');
		}
	}, [cost, promo, promoSale]);
	
	useEffect(() => {
		if (promoCodes[promo]) {
			const sales = promoCodes[promo];
			const isFirst = (currentOrders.length === 0) ? true : false;
			const sale = sales(cost, isFirst);
			
			dispatch(addPromoSale([promo, sale]));
		} else {
			dispatch(removePromoSale());
		}
		
	}, [promo, orderItems, cost, dispatch]);


	return <div className='order_promo'>
		<div className='text'>Промокод</div>
		<Form
			style={{ width: '60%' }}
		>
			<Form.Item
				help={helperText}
			>
				<Input
					placeholder='Промокод'
					defaultValue={promoSale[1] ? promoSale[0] : ''}
					onChange={(e) => setPromo(e.target.value)}
				/>

			</Form.Item>
		</Form>
	</div>;
};