import React from 'react';
import { CartItem } from '../../components/CartItem/CartItem';
import type { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { getGoods } from '../../components/Goods/getGoods';
import './Cart.sass';
import { Order } from '../../components/Order/Order';


type Entries = [string, number]

export const Cart = () => {

	const items = useSelector((state: RootState) => state.cartItems);
	const entries:Entries[] = Object.entries(items);
	const data = getGoods();
	

	let orderSum = 0;
	let orderSale = 0;	

	return <div className='cart'>
		<div className="goods">
			{entries && entries.map(([id, amount])=> {

				if (amount) {

					orderSum += (data[id].price * amount);
					data[id].sale ? orderSale += (data[id].sale * amount) : orderSale + 0;

					return <CartItem
						key={id}
						product={id}
						amount={amount}
						data={data[id]}
					/>;
				}
			})}
			{!orderSum && 
			<p className='empty_cart'>В корзине пусто :(</p>}
		</div>
		{/* {!!orderSum && */}
		{/* // <Order sum={orderSum} sale={orderSale}/>} */}
		<Order sum={orderSum} sale={orderSale}/>
	</div>;
};