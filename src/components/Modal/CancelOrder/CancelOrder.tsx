import { Button } from '@mui/material';
import React from 'react';
import './CancelOrder.sass';
import { cancel } from '../../../store/reducers/processingOrderReducer';
import { useDispatch } from 'react-redux';


type Props = {
    setActive: React.Dispatch<React.SetStateAction<boolean>>,
	orderId: string
}

export const CancelOrder = ({setActive, orderId}:Props) => {

	const dispatch = useDispatch();

	const handleCancel = () => {
		dispatch(cancel(orderId));
		setActive(false);
	}
	return <div className='cancel_order'>
		<p className='cancel_message'>Вы точно хотите отменить заказ?</p>
		<Button className='cancel_button'
			onClick={()=>handleCancel()}>Да, отменить</Button>
	</div>;
};