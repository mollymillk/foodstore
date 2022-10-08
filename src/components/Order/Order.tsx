/* eslint-disable no-mixed-spaces-and-tabs */
import { Button, OutlinedInput, styled, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { PromoCodes, promoCodes } from './promoCodes';
import './Order.sass';
import { addPromoSale, removePromoSale } from '../../store/reducers/costReducer';
import { Modal } from '../Modal/Modal';

type Props = {
	sum: number,
	sale: number
}

export const Order = (props:Props) => {
	const dispatch = useDispatch();
	const totalCost = useSelector((state:RootState) => state.totalCost);
	const orderItems = useSelector((state: RootState)=> state.cartItems);
	const orderInfo = useSelector((state:RootState) => state.orderInfo);

	const [promo, setPromo] = useState<string>(totalCost.promoSale[0]);
	const [helperText, setHelperText] = useState<string>('Введите промокод');
	const [cardModalActive, setCardModalActive] = useState<boolean>(false);
	const [addressModalActive, setAddressModalActive] = useState<boolean>(false);


	const handleChange = (input:keyof PromoCodes|string) => {
		setPromo(input);
	};

	const errorMessages = {
		catch200: `Добавьте товары на сумму ${1500 - totalCost.cost} рублей`,
		fresh20: 'Акция действует до 12:00'
	};


	useEffect(()=> {
		if (totalCost.promoSale[0] == 'promo') {
			setHelperText('Введите промокод');
		} else if (totalCost.promoSale[0] !== 'promo' && totalCost.promoSale[1] == 0) {
			setHelperText(errorMessages[totalCost.promoSale[0]]);
		} else {
			setHelperText('Промокод применён');
		}
	}, [totalCost]);
	
	useEffect(() => {
		if (promo in promoCodes) {
			const sales = promoCodes[promo];
			const sale = sales(totalCost.cost);
			
			dispatch(addPromoSale([promo, sale]));
		} else {
			dispatch(removePromoSale());
		}
		
	}, [promo, orderItems]);

	const ValidationTextField = styled(TextField)({
		'& input:valid + fieldset': {
		  borderColor: 'green',
		  borderWidth: 2,
		},
		'& input:invalid + fieldset': {
		  borderColor: 'red',
		  borderWidth: 2,
		},
		'& input:valid:focus + fieldset': {
		  borderLeftWidth: 6,
		  padding: '4px !important', // override inline-style
		},
	  });



	return <><div className='order_container'>
		<div className='address'>
			<p className='goods_category'>Адрес</p>
			{orderInfo.address ?
				<div className='address_info'>
					<p className='text'>{orderInfo.address}</p>
					<p className='change_button' onClick={() => setAddressModalActive(true)}>изменить</p>
				</div>
				: <p className='address_value' onClick={() => setAddressModalActive(true)}>Выбрать</p>}
		</div>
		<div className='payment_method'>
			<p className='goods_category'>Способо оплаты</p>
			{orderInfo.card ?
				<div className='card_info'>
					<p className='text'>Карта **{orderInfo.card}</p>
					<p className='change_button' onClick={() => setCardModalActive(true)}>изменить</p>
				</div>
				: <p className='payment_value' onClick={() => setCardModalActive(true)}>Выбрать</p>}
		</div><div className='order_info'>

			<h3>Ваш заказ</h3>

			<div className='order_goods'>
				<p className='goods_category'>Товары</p>
				<p className='value'>{props.sum}₽</p>
			</div>

			<div className='order_sale'>
				<p className='sale_category'>Скидка</p>
				<p className='value'>{props.sum - Math.floor(totalCost.cost) + totalCost.promoSale[1]}₽</p>
			</div>

			<div className='order_shipping_cost'>
				<p className='cost_category'>Стоимость доставки</p>
				<p className='value'>Бесплатно</p>
			</div>
		</div><div className='order_promo'>
			<div className='text'>Промокод</div>
			<TextField
				className='promo_input'
				defaultValue={totalCost.promoSale[1] ? totalCost.promoSale[0] : ''}
				helperText={helperText}
				placeholder='Промокод'
				variant='outlined'
				sx={{
					'& .MuiOutlinedInput-root': {
						'& fieldset': {
							borderColor: '#38595E',
						},
						'&:hover fieldset': {
							borderColor: '#FF4E4E',
						},
						'&.Mui-focused fieldset': {
							borderColor: '#FF4E4E',
						},
					},
				}}
				onChange={(e) => handleChange(e.target.value)} />
		</div><div className='order_cost'>
			<h3 className='cost_text'>Итого</h3>
			<p className='value'>{Math.floor(totalCost.cost - totalCost.promoSale[1])}₽</p>
		</div><Button className='order_button' variant="contained">Оплатить</Button>
		<Modal data='card' active={cardModalActive} setActive={setCardModalActive} />
		<Modal data='address' active={addressModalActive} setActive={setAddressModalActive} /></div>

	</>;
	
};