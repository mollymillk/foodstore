import React from 'react';
import { Goods } from '../../components/Goods/Goods';
import { Promo } from '../../components/Promo/Promo';
import './Sales.sass';

export const Sales = ():JSX.Element => {
	return <div className='sales_page'>
		<div className="banners">
			<Promo
				num='first'
				key={1}
				heading='Первый заказ'
				size='-50%'
				promo='new50'
			/>
			<Promo
				num='second'
				key={2}
				heading='При заказе от 1500₽ -'
				size='скидка 200₽'
				promo='catch200'
			/>
			<Promo
				num='third'
				key={3}
				heading='Каждый день до 12:00'
				size='-20%'
				promo='fresh20'
			/>
		</div>
		<div className='goods'>
			<Goods
				onlyDiscounted={true}
			/>
		</div>
	</div>;
};
