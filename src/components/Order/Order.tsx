import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { applyPromo, resetPromo } from '../../store/reducers/promoReducer';
import { RootState } from '../../store/store';
import { PromoCodes, promoCodes } from './promoCodes';
import './Order.sass';
import { addToCost, removeFromCost, addPromoSale, removePromoSale } from '../../store/reducers/costReducer';

type Props = {
	sum: number,
	sale: number
}



export const Order = (props:Props) => {

	const [promo, setPromo] = useState<keyof PromoCodes|''>('');

	const dispatch = useDispatch();
	const totalCost = useSelector((state:RootState) => state.totalCost);
	const settedPromo = useSelector((state:RootState) => state.promo);
	const orderItems = useSelector((state: RootState)=> state.cartItems);

	const handleChange = (input:keyof PromoCodes|string) => {
		dispatch(resetPromo());
		
		Object.keys(promoCodes).forEach((item:keyof PromoCodes) => {
			if (item === input) {
				setPromo(input);
				dispatch(applyPromo(input))
			} 
		})
	}

	console.log(promo);
	
	useEffect(() => {

		if (settedPromo[promo]) {
			const sales = promoCodes[promo];
			const sale = sales(totalCost.cost)
			dispatch(removeFromCost(sale));
			dispatch(addPromoSale([promo, sale]))
			// setPromoSale(sale);
		} else {
			if (totalCost.promoSale[1]) {
				dispatch(addToCost(totalCost.promoSale[1])) 
				dispatch(removePromoSale()) 
			} else {
				dispatch(addToCost(0));
			}
		}
		
	}, [settedPromo, orderItems])


	const helperText = 'apply promo';
	console.log(settedPromo);
	console.log(totalCost.promoSale);



	return <div className='order_container'>
		<div className='address'>Адрес: Заводская 1/38</div>
		<div className='payment_method'>Оплата: карта ****2030</div>

		<div className='order_info'>

			<h3>Ваш заказ</h3>

			<div className='order_goods'>
				<p className='goods_category'>Товары</p>
				<p className='value'>{props.sum}₽</p>
			</div>

			<div className='order_sale'>
				<p className='sale_category'>Скидка</p>
				<p className='value'>{props.sum - Math.floor(totalCost.cost)}₽</p>
			</div>

			<div className='order_shipping_cost'>
				<p className='cost_category'>Стоимость доставки</p>
				<p className='value'>Бесплатно</p>
			</div>
		</div>

		<div className='order_promo'>
			<div className='text'>Промокод</div>
			<TextField
				defaultValue={totalCost.promoSale[0] ? totalCost.promoSale[0] : ''}
				label=""
				helperText={helperText}
				variant="standard"
				onChange={(e) => handleChange(e.target.value)}
				
			/>
		</div>

		<div className='order_cost'>
			<h3 className='cost_text'>Итого</h3>
			<p className='value'>{Math.floor(totalCost.cost)}₽</p>
		</div>

		<Button className='order_button' variant="contained">Оплатить</Button>

	</div>;
};