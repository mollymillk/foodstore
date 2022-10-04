import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.sass';
import {BsCart} from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import logo from './img/logo.svg'
export const Header = ():JSX.Element => {

	const totalCost = useSelector((state:RootState) => state.totalCost);

	return <header className='header'>
		<div className='logo'>
			<img className="logo_img" alt="logo" src={logo} />
		</div>
		<nav className='main_nav'>
			<NavLink className='menu_item' to='/products'>Продукты</NavLink>
			<NavLink to='/cart' className='to_cart'>
				<p className='cart_sum'>{totalCost.cost - totalCost.promoSale[1]}</p>
				<div className='cart_icon'><BsCart size={30}/></div>
			</NavLink>
		</nav>
	</header>;
};
