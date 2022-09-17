import React from 'react';
import { Promo } from '../../components/Promo/Promo';
import './Sales.sass';

export const Sales = ():JSX.Element => {
	return <div className='sales_page'>
		<Promo
			num='first'
			heading='Первый заказ'
			size='-50%'
			promo='new50'
		/>
		<Promo
			num='second'
			heading='Готовая еда'
			size='1 + 1'
			promo='catch200'
		/>
		<Promo
			num='third'
			heading='Свежие овощи'
			size='-20%'
			promo='fresh20'
		/>
	</div>;
};
