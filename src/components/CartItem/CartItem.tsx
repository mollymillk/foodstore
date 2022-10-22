import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCost, addToFullCost, removeFromCost, removeFromFullCost } from '../../store/reducers/costReducer';
import { remove, addCount } from '../../store/reducers/itemsReducer';
import './CartItem.sass';
import { Product, Products } from '../Goods/getGoods';


type Props = {
	product: keyof Products,
	amount: number,
	data: Product
}

export const CartItem = ({product, amount, data}:Props):JSX.Element => {

	const dispatch = useDispatch();

	const priceToAdd = data.sale ? 
		data.price - data.sale :
		data.price;

	const handleAddCount = () => {
		dispatch(addCount(product));
		dispatch(addToCost(priceToAdd));
		dispatch(addToFullCost(data.price));
	};

	const handleRemove = () => {
		dispatch(remove(product));
		dispatch(removeFromCost(priceToAdd));
		dispatch(removeFromFullCost(data.price));

	};

	return <div className='cart_item'>

		<div className='img'>
			<img className='photo' srcSet={data.image_front_small_url}/>
		</div>

		<div className='info'>

			<p className='name'>{data.product_name.substring(0, 21)}</p>
			<p className='price'>
				{data.sale && <span className='full_price'>{data.price}₽</span>}
				{priceToAdd}₽ x {amount}шт
			</p>

			<div className='counter'>

				<div className='remove' color="primary" onClick={() => handleRemove()}>
					<span className="material-icons-outlined">
							remove_circle_outline
					</span>
				</div>

				<p className='amount'>{amount}</p>

				<div className='add'color="primary" onClick={() => handleAddCount()}>
					<span className="material-icons-outlined">
							add_circle_outline
					</span>
				</div>

			</div>
		</div>
	</div>;
};