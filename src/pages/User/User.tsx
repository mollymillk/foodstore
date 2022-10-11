import React from 'react';
import { useSelector } from 'react-redux';
import { CurrentOrder } from '../../components/CurrentOrder/CurrentOrder';
import { OldOrders } from '../../components/OldOrders/OldOrders';
import { RootState } from '../../store/store';

export const User = () => {

	const orderData = useSelector((state:RootState) => state.processingOrder);
	
	
	return <div className='user_page'>
		{orderData[0] && <CurrentOrder/>}
		<OldOrders/>
	</div>; 
};