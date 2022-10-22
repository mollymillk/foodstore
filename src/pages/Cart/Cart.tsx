import React, { useState } from 'react';
import { CartItem } from '../../components/CartItem/CartItem';
import type { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { getGoods } from '../../components/Goods/getGoods';
import './Cart.sass';
import { Order } from '../../components/Order/Order';
import img from './img/trolley.png';
import { NavLink } from 'react-router-dom';
import { Modal } from '../../components/Modal/Modal';
import { AuthContainer } from '../../components/AuthContainer/AuthContainer';
import { Products } from '../../components/Goods/getGoods';


type Entries = [keyof Products, number];

export const Cart = ():JSX.Element => {

	const items = useSelector((state: RootState) => state.cartItems);
	const isAuthorized = useSelector((state:RootState) => state.authorization.isAuthorized);
	const entries:Entries[] = Object.entries(items);
	const data = getGoods();

	const [isModalActive, setIsModalActive] = useState(false);
	

	let orderSum = 0;
	let orderSale = 0;	

	return <><div className='cart'>
		<div className="goods">
			{!isAuthorized && <AuthContainer/>}
			{isAuthorized && entries && entries.map(([id, amount])=> {

				if (amount) {

					orderSum += (data[id].price * amount);
					orderSale += (data[id].sale * amount);

					return <CartItem
						key={id}
						product={id}
						amount={amount}
						data={data[id]}
					/>;
				}
			})}
			{!orderSum && isAuthorized &&
			<div className='empty_cart_container'>
				<img srcSet={img} className='cart_img'/>
				<p className='empty_cart'>В корзине пусто :(</p>
				<NavLink to='/' className='to_main'>За покупками!</NavLink>
			</div>
			}
		</div>
		{!!orderSum && 
		<Order sum={orderSum} sale={orderSale} setActive={setIsModalActive}/>}
	</div>
	<Modal data='paidOrder' active={isModalActive} setActive={setIsModalActive}/>
	</>;
};