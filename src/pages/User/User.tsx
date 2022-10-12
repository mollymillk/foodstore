import React from 'react';
import { getGoods } from '../../components/Goods/getGoods';
import { useSelector } from 'react-redux';
import { CurrentOrder } from '../../components/CurrentOrder/CurrentOrder';
import { OldOrders } from '../../components/OldOrders/OldOrders';
import { RootState } from '../../store/store';
import './User.sass';

export const User = () => {

	const goodsData = getGoods();
	const orderData = useSelector((state:RootState) => state.processingOrder);
	
	
	return <div className='user_page'>
		{orderData.length > 0 && 
			orderData.map((order, index) => {
				return <CurrentOrder
					key={index}
					data={goodsData}
					index={index}/>;
			})}

		{goodsData && <>
			<OldOrders index={0} data={goodsData}/>
			<OldOrders index={1} data={goodsData}/>
		</>
		}
	</div>; 
};