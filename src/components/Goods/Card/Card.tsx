import React from 'react';
import { Button } from '@mui/material';
import type { RootState } from '../../../store/store';
import {useSelector, useDispatch} from 'react-redux';
import { addItem, addCount, remove } from '../../../store/reducers/itemsReducer';
import { addToCost, addToFullCost, removeFromCost, removeFromFullCost } from '../../../store/reducers/costReducer';
import './Card.sass';
import { Products } from '../getGoods';

type Props = {
	img: string,
	name: string,
	id: keyof Products,
	price: number,
	sale: number,
}

const Card = ({img, name, id, price, sale}:Props):JSX.Element => {

	const productName = name.length < 20 ? name : name.substring(0, 19) + '...';
	const items = useSelector((state: RootState) => state.cartItems);
	
	const dispatch = useDispatch();

	const priceToAdd = sale ? 
		price - sale :
		price;

	const handleAddItem = () => {
		dispatch(addItem(id));
		dispatch(addToCost(priceToAdd));
		dispatch(addToFullCost(price));
	};

	const handleAddCount = () => {
		dispatch(addCount(id));
		dispatch(addToCost(priceToAdd));
		dispatch(addToFullCost(price));
	};

	const handleRemove = () => {
		dispatch(remove(id));
		dispatch(removeFromCost(priceToAdd));
		dispatch(removeFromFullCost(price));
	};

	const saledPrice = sale > 0 ?

		<p className='sale_price'>
			{price - sale}₽
			<span className='oldPrice'>
				{price}₽
			</span>
		</p>

		:

		<p className='price'>
			{price}₽
		</p>;


	return <div className='card'>

		<div className='image'>
			<img srcSet={img} className='photo' />
		</div>

		<div className='info'>
			<h3 className='name'>{productName}</h3>
			{saledPrice}

			{!items[id] ?

				<Button
					className='button'
					variant='contained'
					onClick={() => handleAddItem()}
				>
					В корзину
				</Button>

				:

				<div className='counter'>

					<div className='remove' onClick={() => handleRemove()}>
						<span className="material-icons-outlined">
							remove_circle_outline
						</span>
					</div>

					<p className='amount'>{items[id]}</p>

					<div className='add' onClick={() => handleAddCount()}>
						<span className="material-icons-outlined">
							add_circle_outline
						</span>
					</div>
				</div>
			}

		</div>
	</div>;
};


export default Card;
