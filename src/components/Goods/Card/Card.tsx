import { Button, Fab } from '@mui/material';
import type { RootState } from '../../../store/store';
import {useSelector, useDispatch} from 'react-redux';
import { add, remove } from '../../../store/reducers/itemsReducer';
import React from 'react';
import { useState } from 'react';
import './Card.sass';

type Props = {
	img: string,
	name: string,
	id: string
}

export const Card = (props:Props):JSX.Element => {

	const name = props.name.length < 20 ? props.name : props.name.substr(0, 21) + '...';

	const [amount, setAmount] = useState(0);

	const items = useSelector((state: RootState) => state.cartItems.items);
	const dispatch = useDispatch();
	console.log(items);
	

	return <div className='card'>
		<div className='image'>
			<img srcSet={props.img} className='photo'/>
		</div>
		<div className='info'>
			<h3 className='name'
				onClick={() => dispatch(add(props.id))}>{name}</h3>
			<p className='price'>450р</p>

			{!amount ?

				<Button 
					className='button'
					variant='contained'
					onClick={() => setAmount(1)}
				>В корзину
				</Button>

				: 

				<div className='counter'>
					<Fab className='remove' color="primary" onClick={()=> setAmount(amount - 1)}>
						<span className="material-icons-outlined">
							remove_circle_outline
						</span>
					</Fab>
					<p className='amount'>{amount}</p>
					<Fab className='add'color="primary" onClick={()=> setAmount(amount + 1)}>
						<span className="material-icons-outlined">
							add_circle_outline
						</span>
					</Fab>
				</div>
			}

		</div>
	</div>;
};