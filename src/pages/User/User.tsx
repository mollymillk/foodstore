import React from 'react';
import { getGoods } from '../../components/Goods/getGoods';
import { useSelector } from 'react-redux';
import { CurrentOrder } from '../../components/CurrentOrder/CurrentOrder';
import { OldOrders } from '../../components/OldOrders/OldOrders';
import { RootState } from '../../store/store';
import './User.sass';
import { AuthContainer } from '../../components/AuthContainer/AuthContainer';
import { EmptyUserPage } from '../../components/EmptyUserPage/EmptyUserPage';

export const User = () => {

	const goodsData = getGoods();
	const orderData = useSelector((state:RootState) => state.processingOrder);
	const isAuthorized = useSelector((state:RootState) => state.authorization.isAuthorized);
	const newUser = useSelector((state:RootState) => state.authorization.newUser);
	
	
	return <div className='user_page'>
		{orderData.length > 0 && isAuthorized &&
			orderData.reverse().map((order, index) => {
				return <CurrentOrder
					key={index}
					data={goodsData}
					index={index}/>;
			})}

		{isAuthorized && !newUser && goodsData && <>
			<OldOrders index={0} data={goodsData}/>
			<OldOrders index={1} data={goodsData}/>
		</>
		}
		{!isAuthorized && <AuthContainer/>}
		{isAuthorized && newUser && orderData.length === 0 &&
			<EmptyUserPage/>}
	</div>; 
};