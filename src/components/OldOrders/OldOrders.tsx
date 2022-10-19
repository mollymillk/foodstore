import React, { useState } from 'react';
import { oldOrdersData } from './oldOrdersData/oldOrdersData';
import './OldOrders.sass';
import type {Products} from '../Goods/getGoods';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Rate } from 'antd';


type Props = {
	index: number,
	data: Products
}

export const OldOrders = ({index, data}:Props) => {

	const [isRateDisabled, setIsRateDisabled] = useState(false);
	const {orderId, phone, goods, address, time, totalCost} = oldOrdersData[index];
	const entries = Object.entries(goods);
	const userName = useSelector((state:RootState) => state.authorization.name);
	const userPhone = useSelector((state:RootState) => state.authorization.phone);

	return <div className='old_orders'>

		<div className='order_data'>

			<h3 className='orderId'>Заказ {orderId}</h3>
			<p className='message'>Заказ доставлен</p>
			<p className='address'>{address}</p>
			<p className='data'>{time}</p>
			<p className='user_data'>Получатель: {userName} {userPhone}</p>

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

		<div className='rate'>
			<p>Пожалуйста, оцените заказ</p>
			<Rate
				disabled={isRateDisabled}
				onChange={()=>setIsRateDisabled(true)}
			/>
		</div>
		
		<div className='order_payment'>
			<h3 className='sum'>{totalCost} ₽</h3>
			<p className='order_card'>Карта ***6767</p>
		</div>

	</div>;
};

