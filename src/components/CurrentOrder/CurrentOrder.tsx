import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import './CurrentOrder.sass';
import type {Products} from '../Goods/getGoods';
import { Button } from '@mui/material';
import { Modal } from '../Modal/Modal';
import { Rate } from 'antd';


type Props = {
	data: Products,
	index: number,
	userName: string,
	phone: string
}

export const CurrentOrder = ({data, index, userName, phone}:Props) => {


	const {orderId, goods, time, seconds, address, totalCost, canceled, card} = useSelector((state:RootState) => state.processingOrder[index]);
	
	const entries = Object.entries(goods);

	const date = new Date();
	const deliveryTime = 900000 + seconds;
	const updatedTime = (deliveryTime - date.getTime()) / 60000;

	const [timer, setTimer] = useState<number>(updatedTime);
	const [isDelivered, setIsDelivered] = useState<boolean>(false);
	const [isModalActive, setIsModalActive] = useState<boolean>(false);
	const [isRateDisabled, setIsRateDisabled] = useState<boolean>(false);
	

	useEffect(() => {

		timer > 1 ? setInterval(() => {
			const date = new Date();
			const updatedTime = (deliveryTime - date.getTime()) / 60000;
			setTimer(updatedTime);
		}, 60000)

			:  canceled ? setTimer(0) : setIsDelivered(true);

	}, [canceled, deliveryTime, timer]);
	


	return <> <div className='current_order'>

		<div className='order_data'>
			<h2 className='order_id'>Заказ {Math.floor(orderId)}</h2>


			{
				isDelivered ? 
					<h3 className='message'>Заказ доставлен</h3>
					:
					canceled ?
						<h3>Заказ отменен</h3>
						:
						<h3 className='timer'>Курьер будет через {Math.floor(timer)} мин</h3>
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

		<div className='user_data'>Получатель: {userName} {phone}</div>

		<div className='order_payment'>
			<h3 className='order_cost'>{totalCost} ₽</h3>
			<p className='order_card'>Карта ****{card}</p>
		</div>

		{isDelivered &&

			<div className='rate'>
				<p>Пожалуйста, оцените заказ</p>
				<Rate
					disabled={isRateDisabled}
					onChange={()=>setIsRateDisabled(true)}
				/>
			</div>
		}

		{
			!isDelivered && !canceled &&
					<Button className='cancel_button' onClick={()=> setIsModalActive(true)}>Отменить заказ</Button>
		}

		
	</div>
	<Modal orderId={orderId} active={isModalActive} setActive={setIsModalActive} data={'cancel'}/>
	</>;
};