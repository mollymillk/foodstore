import React from 'react';
import { oldOrdersData } from './oldOrdersData/oldOrdersData';
import './OldOrders.sass';
import type {Products} from '../Goods/getGoods';


type Props = {
	index: number,
	data: Products
}

export const OldOrders = ({index, data}:Props) => {

	const {orderId, goods, address, time, totalCost} = oldOrdersData[index];
	const entries = Object.entries(goods);

	return <div className='old_orders'>

		<div className='order_data'>

			<h3 className='orderId'>Заказ {orderId}</h3>
			<p className='message'>Заказ доставлен</p>
			<p className='address'>{address}</p>
			<p className='data'>{time}</p>

		</div>

		<div className='goods'>

			{entries.map(([id, amount])=> {
				
				return data[id] && <div className='product' key={id}> 
					<div className='image'>
						<img
							srcSet={data[id].image_front_small_url}
							className='photo'
						/>
					</div>
					<p className='amount'>X {amount}</p>
				</div>;
			})}

		</div>
		
		<div className='order_payment'>
			<h3 className='sum'>{totalCost} ₽</h3>
			<p className='order_card'>Карта ***6767</p>
		</div>

	</div>;
};