import React from 'react';
import { Fab } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCost, addToFullCost, removeFromCost, removeFromFullCost } from '../../store/reducers/costReducer';
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
		category: string,
		sale: number
	}
}

export const CartItem = (props:Props):JSX.Element => {

	const dispatch = useDispatch();

	const priceToAdd = props.data.sale ? 
		props.data.price - props.data.sale :
		props.data.price;

	const handleAddCount = () => {
		dispatch(addCount(props.product));
		dispatch(addToCost(priceToAdd));
		dispatch(addToFullCost(props.data.price));
	};

	const handleRemove = () => {
		dispatch(remove(props.product));
		dispatch(removeFromCost(priceToAdd));
		dispatch(removeFromFullCost(props.data.price));

	};

	return <div className='cart_item'>

		<div className='img'>
			<img className='photo' srcSet={props.data.image_front_small_url}/>
		</div>

		<div className='info'>

			<p className='name'>{props.data.product_name}</p>
			<p className='price'>
				{props.data.sale && <span className='full_price'>{props.data.price}₽</span>}
				{priceToAdd}₽ x {props.amount}шт
			</p>

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