import { Button, TextField } from '@mui/material';
import React, { ChangeEvent, useState } from 'react';
import './Order.sass';

type Props = {
	sum: number,
	sale: number
}

const promocodes = [ 'new50', 'catch200', 'fresh20' ];


export const Order = (props:Props) => {

	const [isPromoActive, setIsPromoActive] = useState(false);

	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>)=> {
		const promoValue = e.target.value;
		const activePromo = promocodes.find(promo => {
			return promo === promoValue;
		});
		if (activePromo) {
			setIsPromoActive(true);
		} else {
			setIsPromoActive(false);
		}

	};


	const helperText = isPromoActive ? 'Промокод применен!' : '';


	return <div className='order_container'>
		<div className='address'>Адрес: Заводская 1/38</div>
		<div className='payment_method'>Оплата: карта ****2030</div>

		<div className='order_info'>

			<h3>Ваш заказ</h3>

			<div className='order_goods'>
				<p className='goods_category'>Товары(amount)</p>
				<p className='value'>{props.sum}₽</p>
			</div>

			<div className='order_sale'>
				<p className='sale_category'>Скидка</p>
				<p className='value'>{props.sale}₽</p>
			</div>

			<div className='order_shipping_cost'>
				<p className='cost_category'>Стоимость доставки</p>
				<p className='value'>Бесплатно</p>
			</div>
		</div>

		<div className='order_promo'>
			<div className='text'>Промокод</div>
			<TextField
				
				id='standard-disabled'
				label=""
				helperText={helperText}
				variant="standard"
				onChange={handleChange}
				
			/>
		</div>

		<div className='order_cost'>
			<h3 className='cost_text'>Итого</h3>
			<p className='value'>{props.sum - props.sale}₽</p>
		</div>

		<Button className='order_button' variant="contained">Оплатить</Button>

	</div>;
};