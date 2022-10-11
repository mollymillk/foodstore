import { Button } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './PaidOrder.sass';

type Props = {
	setActive: React.Dispatch<React.SetStateAction<boolean>>
}

export const PaidOrder = ({setActive}:Props) => {
	return <div className='paid_order'>
		<p className='success_message'>Заказ оплачен и скоро будет собран!</p>
		<NavLink to='/user' className='to_user'>
			<Button
				className='success_button'
				onClick={()=>setActive(false)}
				variant="contained"
			>Перейти к заказу</Button>
		</NavLink>
	</div>;
};