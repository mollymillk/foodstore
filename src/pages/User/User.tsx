import React, { useEffect, useState } from 'react';
import { getGoods } from '../../components/Goods/getGoods';
import { useSelector } from 'react-redux';
import { CurrentOrder } from '../../components/CurrentOrder/CurrentOrder';
import { RootState } from '../../store/store';
import './User.sass';
import { AuthContainer } from '../../components/AuthContainer/AuthContainer';
import { EmptyUserPage } from '../../components/EmptyUserPage/EmptyUserPage';

export const User = () => {

	const goodsData = getGoods();
	const orderData = useSelector((state:RootState) => state.processingOrder);
	const {isAuthorized, name, phone } = useSelector((state:RootState) => state.authorization);

	const [currentUserOrders, setCurrentUserOrders] = useState([]);

	useEffect(() => {
		const orders = orderData.filter(order => order.phone === phone);
		setCurrentUserOrders(orders);
	}, [orderData, phone]);

	console.log(orderData);
	console.log(phone);
	console.log(currentUserOrders);	
	
	return <div className='user_page'>
		{currentUserOrders.length > 0 && isAuthorized &&
			currentUserOrders.map((currentOrder) => {
				const orderIndex = orderData.findIndex(order => order.orderId === currentOrder.orderId);
				return <CurrentOrder
					key={orderIndex}
					data={goodsData}
					index={orderIndex}
					userName={name}
					phone={phone}/>;
			})}

		{!isAuthorized && <AuthContainer/>}

		{isAuthorized && currentUserOrders.length == 0 &&
			<EmptyUserPage/>}
	</div>; 
};