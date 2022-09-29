import React from 'react';
import { Button, Fab } from '@mui/material';
import type { RootState } from '../../../store/store';
import {useSelector, useDispatch} from 'react-redux';
import { addItem, addCount, remove } from '../../../store/reducers/itemsReducer';
import { addToCost, removeFromCost } from '../../../store/reducers/costReducer';
import './Card.sass';

type Props = {
	img: string,
	name: string,
	id: string
	price: number,
	sale: number,
}

export const Card = (props:Props):JSX.Element => {

	const name = props.name.length < 20 ? props.name : props.name.substr(0, 19) + '...';

	const items = useSelector((state: RootState) => state.cartItems);
	const isDiscounted = props.sale ? ' discounted' : '';
	const cardClassName = `card${isDiscounted}`;
	
	const dispatch = useDispatch();

	const priceToAdd = props.sale ? props.price - props.sale : props.price;

	const handleAddItem = () => {
		dispatch(addItem(props.id));
		dispatch(addToCost(priceToAdd));
	};

	const handleAddCount = () => {
		dispatch(addCount(props.id));
		dispatch(addToCost(priceToAdd));
	};

	const handleRemove = () => {
		dispatch(remove(props.id));
		dispatch(removeFromCost(priceToAdd));
	};

	const price = props.sale > 0 ?
		<p className='sale_price'>
			{props.price - props.sale}₽
			<span className='oldPrice'>
				{props.price}₽
			</span>
		</p>
		:
		<p className='price'>
			{props.price}₽
		</p>;


	return <div className={cardClassName}>
		<div className='image'>
			<img srcSet={props.img} className='photo'/>
		</div>
		<div className='info'>
			<h3 className='name'>{name}</h3>
			{price}

			{!items[props.id] ?

				<Button 
					className='button'
					variant='contained'
					onClick={() => handleAddItem()}
				>
					В корзину
				</Button>

				: 

				<div className='counter'>
					<Fab className='remove' color="primary" onClick={() => handleRemove()}>
						<span className="material-icons-outlined">
							remove_circle_outline
						</span>
					</Fab>
					<p className='amount'>{items[props.id]}</p>
					<Fab className='add'color="primary" onClick={() => handleAddCount()}>
						<span className="material-icons-outlined">
							add_circle_outline
						</span>
					</Fab>
				</div>
			}

		</div>
	</div>;
};