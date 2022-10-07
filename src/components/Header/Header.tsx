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
		<nav className='main_nav'>
			<NavLink to='/' className='logo'>
				<img className="logo_img" alt="logo" src={logo} />
			</NavLink>
			<NavLink to='/cart' className='to_cart'>
				<p className='cart_sum'>{totalCost.cost - totalCost.promoSale[1]}</p>
				<div className='cart_icon'><BsCart size={30}/></div>
			</NavLink>
		</nav>
	</header>;
};
