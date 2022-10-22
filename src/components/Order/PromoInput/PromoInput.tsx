import { Form, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addPromoSale, removePromoSale } from '../../../store/reducers/costReducer';
import { RootState } from '../../../store/store';
import { PromoCodes, promoCodes } from '../promoCodes';
import './PromoInput.sass';

type ErrorMessages = {
	[id in keyof PromoCodes]: string;
};


export const PromoInput = () => {

	const promoSale = useSelector((state:RootState) => state.totalCost.promoSale);
	const cost = useSelector((state:RootState) => state.totalCost.cost);
	const orderItems = useSelector((state: RootState)=> state.cartItems);
	const orders = useSelector((state:RootState) => state.processingOrder);
	const userPhone = useSelector((state:RootState) => state.authorization.phone);
	

	const currentOrders = orders.filter(order => order.phone === userPhone);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const errorMessages:ErrorMessages = {
		catch200: `Добавьте товары на сумму ${1500 - cost} рублей`,
		fresh20: 'Акция действует до 12:00',
		new50: 'Акция действует на первый заказ :(',
		promo: 'Введите промокод'
	};

	const [inputValue, setInputValue] = useState<string>('');
	const [promo, setPromo] = useState<keyof PromoCodes>(promoSale[0]);
	const [helperText, setHelperText] = useState<string | undefined>('Введите промокод');

	const entries = Object.keys(promoCodes);

	const dispatch = useDispatch();

	useEffect(()=> {
		if (entries.includes(inputValue)) {
			setPromo(inputValue as keyof PromoCodes);
		} else {
			setPromo('promo');
		}
	},[entries, inputValue]);



	useEffect(()=> {
		if (promoSale[1] == 0) {
			const text = errorMessages[promo];
			setHelperText(text);
		} else {
			setHelperText('Промокод применён');
		}
	}, [cost, errorMessages, promo, promoSale]);
	
	useEffect(() => {
		if (promoCodes[promo] && promo !== 'promo') {
			const sales = promoCodes[promo];
			const isFirst = (currentOrders.length === 0) ? true : false;
			const sale = sales(cost, isFirst);
			
			dispatch(addPromoSale([promo, sale]));
		} else {
			dispatch(removePromoSale());
		}
		
	}, [promo, orderItems, cost, dispatch, currentOrders.length]);


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
					onChange={(e) => setInputValue(e.target.value)}
				/>

			</Form.Item>
		</Form>
	</div>;
};