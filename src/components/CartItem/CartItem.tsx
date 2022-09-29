import { Fab } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCost, removeFromCost } from '../../store/reducers/costReducer';
import { remove, addCount } from '../../store/reducers/itemsReducer';
import './CartItem.sass';


type Props = {
	product: string,
	amount: number,
	data: {
		image_front_small_url: string,
		product_name: string,
		id: string,
		price: number,
		category: string
	}
}

export const CartItem = (props:Props):JSX.Element => {

	const dispatch = useDispatch();

	const handleAddCount = () => {
		dispatch(addCount(props.product));
		dispatch(addToCost(props.data.price));
	};

	const handleRemove = () => {
		dispatch(remove(props.product));
		dispatch(removeFromCost(props.data.price));
	};

	return <div className='cart_item'>
		<div className='img'>
			<img srcSet={props.data.image_front_small_url}/>
		</div>
		<div className='info'>
			<p className='name'>{props.data.product_name}</p>
			<p className='price'>{props.data.price}₽ x {props.amount}шт</p>
			<div className='counter'>
				<Fab className='remove' color="primary" onClick={() => handleRemove()}>
					<span className="material-icons-outlined">
							remove_circle_outline
					</span>
				</Fab>
				<p className='amount'>{props.amount}</p>
				<Fab className='add'color="primary" onClick={() => handleAddCount()}>
					<span className="material-icons-outlined">
							add_circle_outline
					</span>
				</Fab>
			</div>
		</div>
	</div>;
};