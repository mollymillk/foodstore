import React from 'react';
import { Button, Fab } from '@mui/material';
import type { RootState } from '../../../store/store';
import {useSelector, useDispatch} from 'react-redux';
import { addItem, addCount, remove } from '../../../store/reducers/itemsReducer';
import './Card.sass';

type Props = {
	img: string,
	name: string,
	id: string
}

export const Card = (props:Props):JSX.Element => {

	const name = props.name.length < 20 ? props.name : props.name.substr(0, 21) + '...';

	const items = useSelector((state: RootState) => state.cartItems);
	console.log(items);
	
	const dispatch = useDispatch();	

	return <div className='card'>
		<div className='image'>
			<img srcSet={props.img} className='photo'/>
		</div>
		<div className='info'>
			<h3 className='name'
				onClick={() => dispatch(addItem(props.id))}>{name}</h3>
			<p className='price'>450р</p>

			{!items[props.id] ?

				<Button 
					className='button'
					variant='contained'
					onClick={() => dispatch(addItem(props.id))}
				>
					В корзину
				</Button>

				: 

				<div className='counter'>
					<Fab className='remove' color="primary" onClick={() => dispatch(remove(props.id))}>
						<span className="material-icons-outlined">
							remove_circle_outline
						</span>
					</Fab>
					<p className='amount'>{items[props.id]}</p>
					<Fab className='add'color="primary" onClick={() => dispatch(addCount(props.id))}>
						<span className="material-icons-outlined">
							add_circle_outline
						</span>
					</Fab>
				</div>
			}

		</div>
	</div>;
};