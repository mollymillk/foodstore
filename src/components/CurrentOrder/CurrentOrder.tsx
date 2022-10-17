import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import './CurrentOrder.sass';
import type {Products} from '../Goods/getGoods';
import { Button } from '@mui/material';
import { cancel } from '../../store/reducers/processingOrderReducer';

type Props = {
	data: Products,
	index: number
}

export const CurrentOrder = ({data, index}:Props) => {

	const {orderId, goods, time, seconds, address, totalCost, canceled} = useSelector((state:RootState) => state.processingOrder[index]);
	const dispatch  = useDispatch();
	
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
			:  !canceled  && setIsDelivered(true);
	}, [canceled, deliveryTime, timer]);

	const cancelOrder = () => {
		setTimer(0);
		dispatch(cancel(orderId));
	};
	


	return <div className='current_order'>
		<div className='order_data'>
			<h3 className='orderId'>Заказ {Math.floor(orderId)}</h3>

			{isDelivered ? 
				<p className='message'>Заказ доставлен</p>
				:
				canceled ? <p>Заказ отменен</p> : <p className='timer'>Курьер будет через {Math.floor(timer)} минут</p>
			}
			{!isDelivered && !canceled &&
			<Button onClick={()=> cancelOrder()}>Отменить заказ</Button>}

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