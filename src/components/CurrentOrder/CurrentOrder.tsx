import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import './CurrentOrder.sass';
import type {Products} from '../Goods/getGoods';

type Props = {
	data: Products,
	index: number
}

export const CurrentOrder = ({data, index}:Props) => {

	const {orderId, goods, time, seconds, address, totalCost} = useSelector((state:RootState) => state.processingOrder[index]);
	console.log('orderId ' + orderId);
	console.log(goods);
	console.log('seconds ' + seconds);
	console.log('address ' + address);
	console.log('totalCost ' + totalCost);
	
	const entries = Object.entries(goods);

	const date = new Date();
	const deliveryTime = 900000 + seconds;
	const updatedTime = (deliveryTime - date.getTime()) / 60000;

	const [timer, setTimer] = useState<number>(updatedTime);
	const [isDelivered, setIsDelivered] = useState<boolean>(false);
	

	useEffect(() => {
		timer > 1 ? setInterval(() => {
			const date = new Date();
			const updatedTime = (deliveryTime - date.getTime()) / 60000;
			setTimer(updatedTime);
		}, 60000)
			: setIsDelivered(true);
	}, [deliveryTime, timer]);

	console.log(timer);
	


	return <div className='current_order'>
		<div className='order_data'>
			<h3 className='orderId'>Заказ {Math.floor(orderId)}</h3>

			{isDelivered ? 
				<p className='message'>Заказ доставлен</p>
				:
				<p className='timer'>Курьер будет через {Math.floor(timer)} минут</p>
			}

			<p className='address'>{address}</p>
			<p className='time'>{time}</p>
		</div>
		<div className='goods'>
			{data && entries.map(([id, amount])=> {
				return !!amount && <div className='product' key={id}> 
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
			<h3 className='order_cost'>{totalCost} ₽</h3>
			<p className='order_card'>Карта ***6767</p>
		</div>

		
	</div>;
};