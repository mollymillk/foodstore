import React from 'react';
import { getGoods } from '../Goods/getGoods';
import './OldOrders.sass';

export const OldOrders = () => {

	const data = getGoods();

	return <div className='old_orders'>

		<div className='order_data'>

			<p className='address'>Заводская 1/38</p>
			<p className='data'>5 октября 13:00</p>
			<p className='sum'>558p</p>

		</div>

		<div className='goods'>

			<div className='product'></div>
			<div className='product'></div>
			<div className='product'></div>
			<div className='product'></div>
			<div className='product'></div>

		</div>

	</div>;
};